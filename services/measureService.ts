import { MeasureRepository } from '../repositories/measureRepository';
import axios from 'axios';

interface MeasureInput {
  image: string;
  customerCode: string;
  measureDatetime: Date;
  measureType: string;
}

/**
 * MeasureService é responsável pela lógica de negócio relacionada às medições.
 */
export const MeasureService = {
  /**
   * Processa o upload da imagem, consulta o Google Gemini e salva a medição no banco de dados.
   * @param input - Dados da medição.
   * @returns A resposta contendo a URL da imagem, o valor lido e o UUID da medição.
   */
  async uploadMeasure(input: MeasureInput) {
    // Verifica se já existe uma leitura para o mês atual
    const existingMeasure = await MeasureRepository.findExistingMeasure(
      input.customerCode,
      input.measureType,
      input.measureDatetime.getMonth() + 1
    );

    if (existingMeasure) {
      throw new Error('DOUBLE_REPORT');
    }

    // Chama a API do Google Gemini para processar a imagem
    const response = await axios.post(
      'https://api.google.com/gemini/v1/vision', // Endereço fictício, substitua pelo correto
      { image: input.image },
      { headers: { 'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` } }
    );

    // Extraindo valores da resposta da API
    const measureValue = response.data.value;
    const imageUrl = response.data.imageUrl;
    const measureUuid = response.data.guid;

    // Salva a medição no banco de dados
    const measure = await MeasureRepository.createAndSave({
      customerCode: input.customerCode,
      measureType: input.measureType,
      measureValue,
      imageUrl,
      confirmed: false,
      createdAt: input.measureDatetime,
    });

    return {
      image_url: imageUrl,
      measure_value: measureValue,
      measure_uuid: measureUuid,
    };
  },

  /**
   * Confirma ou corrige o valor de uma medição existente.
   * @param id - ID da medição.
   * @param confirmedValue - Novo valor confirmado.
   * @returns Verdadeiro se a operação for bem-sucedida.
   */
  async confirmMeasure(id: string, confirmedValue: number) {
    const updatedMeasure = await MeasureRepository.updateConfirmedValue(id, confirmedValue);
    if (!updatedMeasure) {
      throw new Error('MEASURE_NOT_FOUND');
    }
    return { success: true };
  },

  /**
   * Lista as medições de um cliente específico, com filtro opcional por tipo de medição.
   * @param customerCode - Código do cliente.
   * @param measureType - Tipo de medição (opcional).
   * @returns Uma lista de medições.
   */
  async listMeasures(customerCode: string, measureType?: string) {
    const measures = await MeasureRepository.listMeasures(customerCode, measureType);
    if (measures.length === 0) {
      throw new Error('MEASURES_NOT_FOUND');
    }
    return { customer_code: customerCode, measures };
  },
};
