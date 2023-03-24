import * as deepl from 'deepl-node';
// const deepl = require('deepl-node');

const authKey = '41628d45-0951-8d10-0921-34e67e2f5d60:fx'; // Replace with your key
const translator = new deepl.Translator(authKey);

// export const deepLTranslator = async () => {
//     const result = await translator.translateText('Hello, world!', null, 'es');
//     console.log(result.text); // Bonjour, le monde !
// };

export const deepLTranslator = async (message: string) => {
  try {
    console.log(await translator.getUsage());

    const targetLang: deepl.TargetLanguageCode = 'fr';

    const result: deepl.TextResult = await translator.translateText(
      message,
      null,
      targetLang
    );

    return console.log(result.text); // Bonjour, le monde !
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
};

// (async () => {
//   try {
//       console.log(await translator.getUsage());

//       const targetLang: deepl.TargetLanguageCode = 'fr';

//       const result: deepl.TextResult = await translator.translateText(
//           'Hello, world!',
//           null,
//           targetLang,
//       );

//       console.log(result.text); // Bonjour, le monde !
//   } catch (error) {
//       console.log(error);
//       process.exit(1);
//   }
// })();
