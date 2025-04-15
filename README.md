<p align="center">
  <img src="https://github.com/user-attachments/assets/865abada-981c-49b5-9e42-4d878f0bb8bd">
<p align="center">
  
# UI5 Fiori Exercises
Ejercicios para dominar el Framework de Frontend de SAP. Cada uno de estos ejercicios está planeado para enseñarse y realizarse durante la clase. Aquellos ejercicios denotados con ___negritas___ y con un asterisco(*), deben ser implementados por los estudiantes sin apoyo del consultor. En total, el repositorio contiene _8_ ejercicios prácticos. 

Ejercicios : 
- 1:	Desarrollo de aplicaciones con SAPUI5 freestyle.
  - 1.1: Ejemplo básico.
  - 1.2: Introducción a vistas y controladores.
  - 1.3: Adición de conceptos más complejos. 
- 2:	Implementar navegación de Apps.
  - 2.1: Introducción a navegación y rutas.
  - ___2.2: Ejercicio para agregar una ruta.*___
- 3:	Data Binding y controles en SAPUI5 en el contexto de Fiori. 
  - Data binding a partir de un modelo JSON. 
- 4:	Consumo y manipulación de servicios OData en aplicaciones Fiori.
  - Consumo de un servicio OData para desplegar información. 
- 5:	Consumo de ODatas en controles de aplicaciones Fiori.
  - ___Modificación del ejercicio anterior con funcionalidad añadida, incluyendo una barra de búsqueda con controles de SAP.*___

## Ambiente de desarrollo. 
### Prerequisitos
Uso de Visual Studio Code como editor de código. 

### Sistema Operativo 
Para estos ejercicios, se utiliza Linux (Ubuntu). Debido a esto, si no se tiene Ubuntu como OS, se debe instalar WSL (Windows Subsytem for Linux). 
[Instalar WSL](https://learn.microsoft.com/es-mx/windows/wsl/install)

En resumen, se debe ejecutar estos comandos (por separado) en PowerShell con permisos de administrador. 
```bash
wsl --install
```
```bash
wsl --install -d Ubuntu
```

### Dependencias
Install Node.js and npm

```bash
# Download and install fnm:
curl -o- https://fnm.vercel.app/install | bash
# Download and install Node.js:
fnm install 22
# Verify the Node.js version:
node -v # Should print "v22.14.0".
# Verify npm version:
npm -v # Should print "10.9.2".
```

Instalar Yeoman
- Yeoman es una herramienta de scaffolding open source para aplicaciones web modernas. Te ayuda a iniciar nuevos proyectos rápidamente, siguiendo buenas prácticas y utilizando herramientas que aumentan tu productividad.

```bash
npm install -g yo
```

Instalar el generador easy-ui5
- Para utilizar Yeoman y crear proyectos SAPUI5, es necesario instalar un plugin (otro módulo de npm). Yeoman reconoce automáticamente todos los plugins que tengan el prefijo "generator-" en el nombre del módulo:
```bash
npm install -g generator-easy-ui5
```

Ya está todo listo, puedes clonar el repositorio para comenzar a trabajar con cada uno de los ejercicios. A continuación, se despliega la documentación para cada uno de los ejercicios. 
 
## Documentación. 
A continuación, se despliega la documentación para cada uno de los ejercicios mencionados. 
