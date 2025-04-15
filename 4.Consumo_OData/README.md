# 4. Consumo y manipulación de servicios OData en aplicaciones Fiori.

Ejercicio práctico para extraer información de un servicio OData. Posteriormente, se utiliza el concepto de Data Binding, para desplegar la información obtenida en una tabla. 

Para la creación de esta aplicación, se utilizo el generador de easy-ui5, utilizando el siguiente comando: 
```bash
yo easy-ui5 project
```
Al ejecutar dicho comando, se solicita confirmación sobre las siguientes opciones. Se debe seleccionar lo siguiente: 
| Parameter                                                                 | Value                                     |
|---------------------------------------------------------------------------|-------------------------------------------|
| What do you want to do?                                                  | project `[project]`                       |
| Which namespace do you want to use?                                      | `tutorial`                                |
| How do you want to name this project?                                    | `myui5project`                            |
| How do you want to name the first UI module within your project?         | `myui5app`                                |
| Do you want to enable the SAP Fiori elements flexible programming model? | No                                        |
| On which platform would you like to host the application                 | SAP Build Work Zone, standard edition     |
| What name should be displayed on the Fiori Launchpad tile?              | My UI5 Application                        |
| Where should your UI5 libs be served from?                              | Local resources (SAPUI5)                  |
| Would you like to create a new directory for the project?               | Yes                                       |
| Would you like to initialize a local git repository for the project?    | Yes                                       |

Posteriormente, se ejecutó el siguiente comando para instalar un modelo de información, con las opciones que se muestran: 
```bash
yo easy-ui5 project model
```
| Parameter                                                                 | Value                                                        |
|---------------------------------------------------------------------------|--------------------------------------------------------------|
| How do you want to name your new model? (Press enter for default model.) | *(no escribir nada)*                                         |
| Which type of model do you want to add?                                  | OData v2                                                     |
| Which binding mode do you want to use?                                   | TwoWay                                                       |
| What is the data source URL of your service?                             | https://services.odata.org/V2/Northwind/Northwind.svc/       |
| Do you want to set up a proxy for the new model?                         | Yes                                                          |
| Do you want to set up a route (xs-app.json) and destination for your new model? | No                                                       |

Posteriormente, se establecieron los programas pertenecientes a este proyecto para implementar el objetivo mencionado en el primer párrafo. 

Para ejecutar, se deben correr los siguientes comandos en este directorio. 
```bash
cd tutorial.myui5project/
npm install
npm run start:myui5app
```