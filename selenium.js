const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('path');

const urlAlvo = "http://chromedriver.storage.googleapis.com/index.html?path=114.0.5735.90/";
const caminho = path.join(__dirname, './Download'); // Caminho relativo ao diretório do script


async function selenium() {
  let driver;

  try {
      // Configurar as opções do navegador
      const chrome = require('selenium-webdriver/chrome');
 
      const chromeOptions = new chrome.Options();
     // chromeOptions.addArguments('--headless'); // Configurar o modo invisível
      chromeOptions.setUserPreferences({
        'download.default_directory': caminho // Caminho para o diretório de download desejado
        });

      driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(chromeOptions)
      .build();

    await driver.get(urlAlvo);
  
    {
      await new Promise(resolve => setTimeout(resolve, 1000)); //espera 1 segundos
    }

    await driver.findElement(By.linkText("chromedriver_linux64.zip")).click()
    {
      await new Promise(resolve => setTimeout(resolve, 1000)); //espera 1 segundos
    }

    await driver.quit();

  } catch (error) {
    console.log(error)
  }
}
selenium()
