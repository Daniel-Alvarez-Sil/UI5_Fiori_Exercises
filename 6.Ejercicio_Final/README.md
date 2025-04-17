# 6. Ejercicio Final.

En este ejercicio, se aprenderá a realizar lo siguiente: 
- 1: Extensión de una aplicación con controles Smart.
- 2: Transporte de aplicaciones.
- 3: Publicación de aplicaciones en el Fiori Launchpad.

## 6.1. Extensión de una aplicación. 
Este proyecto extiende la funcionalidad del ejercicio 5, pero aplicando una lista SMART. 
Para ejecutar, se deben correr los siguientes comandos en este directorio. 
```bash
cd tutorial.myui5project/
npm install
npm run start:myui5app
```

## 6.2. Transporte de Aplicaciones. 
Si no se cuenta con una licensia activa, se debe instalar la versión de prueba de SAP BTP. 
[Crear cuenta de SAP BTP.](https://developers.sap.com/tutorials/hcp-create-trial-account.html)

Instalar el cliente de Cloud Foundry. 
```bash
# Instalar brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bashrc

# Instalar cf
brew install cloudfoundry/tap/cf-cli@8

# Instalar plugin de multiapps (dos opciones)
  # Opción 1 (recomendada)
cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64
  # Opción 2
cf install-plugin -r CF-Community "multiapps"

```

Para validar la instalación de cf, ejecute el siguiente comando
```bash
cf # Despliegue de lista de comandos
cf plugins | grep multiapps  # Despliegue de plugins de cf
```

Después, consiga la URL de Cloud Foundry: 
![image](https://github.com/user-attachments/assets/6788dbd0-7e0d-41bc-8121-0b6dae261458)
![image](https://github.com/user-attachments/assets/7baf2dbe-bdb3-4bb6-88bb-418d2f6f2ad4)
![image](https://github.com/user-attachments/assets/cd34c27e-5eb0-479e-ba3e-79455a3d649c)

Ejecute el siguiente comando en la terminal, para vincular con cf:
```bash
cf login -a <URL del paso anterior> --sso
```
Se presentará una liga a través de la cual se le proveerá de un passcode para iniciar sesión en la terminal. 

Para realizar el transporte de la aplicación a Cloud Foundry, siga los siguientes pasos: 
```bash
# Construir el proyecto
npm run build
# Transportar la aplicación
npm run deploy
```

## 6.3. Publicación de Aplicaciones. 
En SAP BTP Cockpit, agregar las siguientes suscripciones: 
- Cloud Identity Services
- SAP Build Work Zone
  
![image](https://github.com/user-attachments/assets/5e6e8c73-5b77-4203-bec5-43232059d96f)

Por favor espera a que la suscripción se termine de instalar y, cuando el proceso haya terminado, revisa tu correo para terminar de registrar la suscripción. 

Después, por favor instala SAP Build Work Zone. 
![image](https://github.com/user-attachments/assets/f512c3da-968b-4f80-8c35-e1fda0d90373)

Después, ve a las siguientes pestañas "Security > Role Collections". Selecciona la opción de Launchpad_Admin. 
![image](https://github.com/user-attachments/assets/10978fdd-0701-488c-9f36-ebee47463202)

Da clic en __Editar__ y agrega tu usuario y el usuario de Cloud Identity Services. 
![image](https://github.com/user-attachments/assets/e60e0d97-100a-4f85-b600-e76496aaf458)
![image](https://github.com/user-attachments/assets/8f981898-12f1-46d4-83d6-819b45e4977b)
Da clic en __Save (Guardar)__.

Añade una nueva destinación para el servicio de Northwind. 
![image](https://github.com/user-attachments/assets/759b5a76-93e3-4c12-abf5-c52078d4c274)
![image](https://github.com/user-attachments/assets/5f4499ad-2a90-4a4e-8df4-ec13c848c479)
Guarda tus cambios. 

Ahora, entra a SAP Build Work Zone, dirígete a Channel Manager y selección el botón para refrescar: 
![image](https://github.com/user-attachments/assets/86f93d91-4048-4b13-a931-a4ab8e840a25)
![image](https://github.com/user-attachments/assets/dfb3278e-d418-4d83-a80e-0f238abfe073)

Seguidamente, dirigete a Content Manager y selecciona Content Explorer:
![image](https://github.com/user-attachments/assets/6fda626c-5335-4695-b64d-919599c15b6d)

Selecciona HTML5 Apps: 
![image](https://github.com/user-attachments/assets/b1927f49-d0ad-4069-b587-ee5339cccac5)

Visualiza tu aplicación, seleccionala y oprime el botón de __Add (añadir)__. 
![image](https://github.com/user-attachments/assets/57df3c80-544b-4d40-936b-6e7c60c65bac)

Regresa al Content Manager y crea un grupo default. En el grupo, asigna tu aplicación y salva los cambios. 
![image](https://github.com/user-attachments/assets/f0309adb-4adb-43ec-9b11-2939c871ced0)
![image](https://github.com/user-attachments/assets/bd61921a-b9a9-4a94-a2e4-090eb590ccd9)

Regresa al Content Manager y asigna tu aplicación visible a todos (everyone): 
![image](https://github.com/user-attachments/assets/a85d0bb8-9cc6-4079-a740-30a41393fded)
![image](https://github.com/user-attachments/assets/551cfd94-2e24-4612-a051-9966429d5ac1)
![image](https://github.com/user-attachments/assets/18de7579-fbdb-44bd-ae74-9d378514e0ac)

Ve al apartado de Site Directory y crea un nuevo Sitio. Posteriormente, abre la URL desplegada y ¡listo! Ya has transportado un app y la has publicado en un Fiori Launchpad que está contenido en un Site. 
![image](https://github.com/user-attachments/assets/ec3faf4f-3e30-4a27-a070-1e7f97ec1351)
![image](https://github.com/user-attachments/assets/fcf1304f-3b79-4e79-be2e-5cddba5e3fe1)
![image](https://github.com/user-attachments/assets/b6cd892d-d682-4d71-9486-9d206e4b98c3)
![image](https://github.com/user-attachments/assets/fccfe96f-41e6-42e5-ab96-ed5e45dc7934)

