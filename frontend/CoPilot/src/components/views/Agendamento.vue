<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Agendamento de Salas</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <form>
              <div class="row">
                <div class="col">
                  <label for="inputName">Data da reunião:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="dataAgendamento"
                    placeholder="dd/MM/yyyy"
                  />
                </div>
                <div class="col">
                  <label for="inputName">Horário de início:</label>
                  <input type="text" name="hora_inicio" class="form-control" placeholder="00:00" />
                </div>
                <div class="col">
                  <label for="inputName">Horário de término:</label>
                  <input type="text" name="hora_fim" class="form-control" placeholder="00:00" />
                  <br />
                </div>
              </div>
              <div class="form-group right">
                <button type="submit" class="btn btn-outline-primary position-voltar">Buscar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Salas Disponíveis</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <!-- No data message -->
            <p class="no-data text-center">Sem salas cadastradas!</p>

            <table data-table class="table-sm">
              <thead class="table-head">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Quantidade de cadeiras</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td class="td"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td class="text-left edit-block">
                    <div class="form-check">
                      <input class type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <br />
              <label for="inputName">Colaborador:</label>
              <select class="form-control" name="colaborador_id">
                <option>Selecione...</option>
                <option>
                  <!-- {{colaborador.nome}} -->
                </option>
              </select>
              <br />
              <div class="form-group right">
                <!-- <button type="button" class="btn btn-success position">Salvar</button> -->
                <button type="submit" class="btn btn-success position-voltar">Salvar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>