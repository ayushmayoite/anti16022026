(async () => {
  const pdfModule = await import("pdf-parse");
  const pdf = pdfModule.default || pdfModule;

  console.log("Type of pdf:", typeof pdf);
  console.log("Keys of pdf:", Object.keys(pdf));
  if (pdf.default) console.log("Type of pdf.default:", typeof pdf.default);
  if (pdf.PDFParse) console.log("Type of pdf.PDFParse:", typeof pdf.PDFParse);
})();
