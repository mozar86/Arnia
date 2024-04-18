import { it, expect, describe } from "vitest"
import { findUserByEmail, updateUser } from "."

describe("findUserByEmail", () => {
  it("deve ser capaz de retornar o usuário no banco de dados caso exista", () => {
    const email = "victor@email.com"
    const database =  [{ email, name: "Victor", id: 1 }] 
    const result = findUserByEmail(email, database)
    expect(result.email).toStrictEqual(email)
  })
  
  it("deve ser possível retornar undefined caso o usuário não seja encontrado", () => {
    const email = "victor@email.com"
    const result = findUserByEmail(email, [])
    expect(result).toBeUndefined()
  })
})

describe("updateUser", () => {
  it("deve ser capaz de retornar um erro caso o usuário ñ seja encontrado", () => {
    const result = updateUser("123", { name: "Victor Atualizado" }, [])
    expect(result).toEqual("User not found")
  })

  it("deve ser capaz de atualizar um usuário", () => {
    const database = [{ id: "123", name: "Victor" }]
    const result = updateUser("123", { name: "Victor Atualizado" }, database)
    expect(result).toEqual("User updated successfully")
    expect(database[0].name).toEqual("Victor Atualizado")
  })
})