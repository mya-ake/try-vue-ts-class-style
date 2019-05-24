import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import { Contact } from "@/types/models";
import store from "@/store";

@Module({ name: "contact", store, namespaced: true, dynamic: true })
export default class ContactStore extends VuexModule {
  _values: Contact | null = null;

  @Mutation
  SET_VALUES(values: Contact) {
    this._values = { ...values };
  }

  @Action({ commit: "SET_VALUES" })
  saveValues(values: Contact) {
    return values;
  }

  get values() {
    return this._values;
  }
}

export const contactStore = getModule(ContactStore);
