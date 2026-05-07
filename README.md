# FloatingFrame

Networktopology Visualizer

Backend at [zoiska/FloatingFrame-Backend](https://github.com/zoiska/FloatingFrame-Backend)

### Kamerazugriff ist in modernen Browsern nur per https oder localhost gestattet.

#### Um auf dem Handy testen zu können:

1. mkcert installieren
   (per apt: 1. sudo apt install mkcert libnss3-tools 2. mkcert -install)
2. Cert generieren
   (mkcert 192.168.X.X)
3. in vite.config.js Pfade anpassen
4. npm run dev 😄

### Auf mobilen Geräten sind DevTools nicht verfügbar?!

#### mit Eruda können DevTools auf dem Handy eingesehen werden

```
import eruda from "eruda";

export default function foo(){

    useEffect(() => {
        eruda.init();
    }, []);

return(<></>)
}
```
