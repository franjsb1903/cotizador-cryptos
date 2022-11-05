# Cotizador Criptomonedas

Aplicación para cotizar criptomonedas, conociendo su precio actual, su precio durante el día y su porcentage de variación.

**Aquí puedes ver la [aplicación](https://comforting-melomakarona-f5fc92.netlify.app/).**

## Tecnologías

La aplicación ha sido creada con las siguientes tecnologías:

- **ReactJS**
- **Styled Components**
- **ViteJS**
- **JavaScript**
- **Fetch**

## API

La información se consulta a API facilitada por la web **https://min-api.cryptocompare.com/**, de modo que podemos obtener la información con una simple consulta fetch. Las imágenes también se obtienen a través de la web **https://cryptocompare.com**.

## Despliegue local

Para un despliegue local de la aplicación, simplemente clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

ViteJS abrirá automáticamente la aplicación en tu navegador.

## CI/CD

La aplicación se encuentra desplegada en **Netlify** a través de GitHub, por lo que implementa CI/CD de manera automática, desplegando de nuevo la aplicación ante cualquier cambio en la **rama main**.
