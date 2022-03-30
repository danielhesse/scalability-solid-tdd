import crypto from "crypto";

/**
 * protected
 * Utilizado quando a informação deve ser acessível somente nesta classe e nas
 * classes em que ela extende.
 */

export abstract class Entity<T> {
  protected id: string;
  public props: T;

  constructor(props: T, id?: string) {
    this.props = props;
    this.id = id ?? crypto.randomUUID();
  }
}
