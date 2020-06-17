import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  // INJEÇÃO DE DEPENDÊNCIA: em vez de criarmos 
  // manualmente as DEPENDÊNCIAS necessárioas, o
  // próprio Agular as cria e INJETA o objeto
  // ja instanciado como parâmetro do construtor
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:3000/fornecedor').toPromise()
  }

  excluir(id: string){
    return this.http.request('DELETE', 'http://localhost:3000/fornecedor', 
      {body: {_id: id}}).toPromise()
  }
}
