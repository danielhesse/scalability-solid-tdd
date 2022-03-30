import crypto from "crypto";

/**
 * protected
 * Utilizado quando a informação deve ser acessível somente nesta classe e nas
 * classes em que ela extende.
 */

export abstract class Entity<T> {
  protected _id: string;
  public props: T;

  get id() {
    return this._id;
  }

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}
