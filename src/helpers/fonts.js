import FontFaceObserver from 'fontfaceobserver';

export const LoadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400|Montserrat:200|Teko:400';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const roboto = new FontFaceObserver('Roboto');
  const montserrat = new FontFaceObserver('Montserrat');
  const teko = new FontFaceObserver('Teko');

  roboto.load();
  montserrat.load();
  teko.load();
};
