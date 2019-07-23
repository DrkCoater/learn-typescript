export abstract class TranslateLoader {
  abstract getTranslation(lang: string): any;
}

export class TranslateFakeLoader extends TranslateLoader {
  getTranslation(lang: string): any {
    return {};
  }
}
