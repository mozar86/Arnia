import { Measure } from '../entities/measure';
import { MeasureModel } from '../models/measureModel';

/**
 * MeasureRepository é responsável por interagir com a entidade Measure no banco de dados.
 */
export const MeasureRepository = {
  /**
   * Cria e salva uma nova medição no banco de dados.
   * @param measureData - Dados da medição a ser salva.
   * @returns A medição salva.
   */
  async createAndSave(measureData: Partial<Measure>): Promise<Measure> {
    const measure = MeasureModel.create(measureData);
    return await MeasureModel.save(measure);
  },

  /**
   * Busca uma medição pelo ID.
   * @param id - ID da medição.
   * @returns A medição encontrada ou undefined.
   */
  async findById(id: string): Promise<Measure | undefined> {
    return await MeasureModel.findOneBy({ id });
  },

  /**
   * Verifica se já existe uma leitura no mês atual para um determinado cliente e tipo de medição.
   * @param customerCode - Código do cliente.
   * @param measureType - Tipo de medição (WATER ou GAS).
   * @param month - Mês da leitura.
   * @returns A medição encontrada ou undefined.
   */
  async findExistingMeasure(customerCode: string, measureType: string, month: number): Promise<Measure | undefined> {
    return await MeasureModel.createQueryBuilder('measure')
      .where('measure.customerCode = :customerCode', { customerCode })
      .andWhere('measure.measureType = :measureType', { measureType })
      .andWhere('EXTRACT(MONTH FROM measure.createdAt) = :month', { month })
      .getOne();
  },

  /**
   * Atualiza o valor confirmado de uma medição existente.
   * @param id - ID da medição.
   * @param confirmedValue - Novo valor confirmado.
   * @returns A medição atualizada.
   */
  async updateConfirmedValue(id: string, confirmedValue: number): Promise<Measure | undefined> {
    const measure = await this.findById(id);
    if (measure) {
      measure.measureValue = confirmedValue;
      measure.confirmed = true;
      return await MeasureModel.save(measure);
    }
    return undefined;
  },

  /**
   * Lista todas as medições de um determinado cliente, filtrando opcionalmente pelo tipo de medição.
   * @param customerCode - Código do cliente.
   * @param measureType - Tipo de medição (opcional).
   * @returns Uma lista de medições.
   */
  async listMeasures(customerCode: string, measureType?: string): Promise<Measure[]> {
    const query = MeasureModel.createQueryBuilder('measure')
      .where('measure.customerCode = :customerCode', { customerCode });

    if (measureType) {
      query.andWhere('measure.measureType = :measureType', { measureType });
    }

    return await query.getMany();
  },
};
