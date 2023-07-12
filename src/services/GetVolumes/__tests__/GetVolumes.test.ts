import { DefaultApi } from '../../api';
import { GetVolume } from '../GetVolumes';

describe('GetVolume', () => {
  it('should call DefaultApi with correct parameters', async () => {
    const subject = 'Star Wars';
    const startIndex = 0;
    const maxResults = 10;

    const endpoint = `/volumes?q=${subject}&startIndex=${startIndex}&maxResults=${maxResults}`;
    const response = {
      kind: 'books#volumes',
      totalItems: 580,
      items: [
        {
          kind: 'books#volume',
          id: 't636zwEACAAJ',
          etag: 'dv+t7GKksTM',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/t636zwEACAAJ',
          volumeInfo: {
            title: 'O mundo segundo Star Wars',
            authors: ['Cass R. Sunstein'],
            publishedDate: '2016-11-09',
            description:
              'Star Wars pode ser considerado um símbolo do século XX, um mito moderno, uma clássica jornada do herói com um apelo universal que conquistou gerações e ainda hoje vem colecionando fãs ao redor do mundo. Neste livro divertido, informativo e emocionante, Cass R. Sunstein explora as lições ensinadas pela série sobre infância, paternidade, rebeliões e redenção, e ainda sobre direito constitucional, economia, política e outros temas. Com riqueza de detalhes, o autor trata do sucesso inesperado e imprevisível da franquia e explora o motivo do êxito e do fracasso de outras histórias, argumentando que Star Wars é sobre liberdade de escolha e a capacidade de fazer o que é certo mesmo quando a esperança é mínima.',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '8501107751',
              },
              {
                type: 'ISBN_13',
                identifier: '9788501107756',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 0,
            printType: 'BOOK',
            categories: ['Performing Arts'],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            language: 'pt-BR',
            previewLink:
              'http://books.google.com.br/books?id=t636zwEACAAJ&dq=Star+Wars&hl=&cd=1&source=gbs_api',
            infoLink:
              'http://books.google.com.br/books?id=t636zwEACAAJ&dq=Star+Wars&hl=&source=gbs_api',
            canonicalVolumeLink:
              'https://books.google.com/books/about/O_mundo_segundo_Star_Wars.html?hl=&id=t636zwEACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink:
              'http://play.google.com/books/reader?id=t636zwEACAAJ&hl=&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
          searchInfo: {
            textSnippet:
              'Neste livro divertido, informativo e emocionante, Cass R. Sunstein explora as lições ensinadas pela série sobre infância, paternidade, rebeliões e redenção, e ainda sobre direito constitucional, economia, política e outros temas.',
          },
        },
      ],
    };
    const method = 'get';

    const spyOnSGetVolume = jest
      .spyOn(DefaultApi, method)
      .mockResolvedValue(response);
    const result = await GetVolume(subject);
    expect(spyOnSGetVolume).toHaveBeenCalledWith(endpoint);
    expect(result).toEqual(response);
  });
});
