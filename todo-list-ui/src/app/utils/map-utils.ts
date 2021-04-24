export class MapUtils {

  private constructor() {
  }

  static findKeyByValue(map: Map<any, any>, value: any): any {
    for (const key of map.keys()) {
      if (map.get(key) === value) {
        return key;
      }
    }
    return undefined;
  }

}
