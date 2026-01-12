console.log("Proxy fonksiyonu yüklendi - test modu");
exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: "Test başarılı!" })
  };
};
