import { Injectable } from '@angular/core';
import { ItemChatListModel } from '../Models/item-chat-list-model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  public obtenerConversaciones(): ItemChatListModel[] {
    return this.listaDeConversaciones;
  }

  private listaDeConversaciones: ItemChatListModel[] = [{
    id: 1,
    nombreContacto: "Carlos Andres",
    fotoContacto: "http://pm1.narvii.com/6332/af4469120777df5ae77da309405ba4c7d0e8783b_00.jpg",
    ultimoMensaje: "Hola",
    horaUltimoMensaje: "12:09 PM"
  }, {
    id: 2,
    nombreContacto: "Marina (Cafeteria)",
    fotoContacto: "",
    ultimoMensaje: "",
    horaUltimoMensaje: "10:07 PM"
  },
  {
    id: 2,
    nombreContacto: "",
    fotoContacto: "",
    ultimoMensaje: "",
    horaUltimoMensaje: "10:07 PM"
  },
  {
    id: 2,
    nombreContacto: "",
    fotoContacto: "",
    ultimoMensaje: "",
    horaUltimoMensaje: "10:07 PM"
  },
  {
    id: 2,
    nombreContacto: "",
    fotoContacto: "",
    ultimoMensaje: "",
    horaUltimoMensaje: "10:07 PM"
  }]

}
