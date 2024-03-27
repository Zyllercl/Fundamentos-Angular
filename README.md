# Fundamentos-Angular

## Permitir ejecutar comandos PowerShell
```bas
Set-ExecutionPolicy Unrestricted
```
## Instalacion Angular CLI
```bash
npm install -g @angular/cli
```

## Crear una App en Angular
```bash
ng new 'nombre_app' --standalone=false
```

### Iniciar App en Angular
```bash
ng serve -o
```

### Instalacion npm
```bash
Cuando se clone el repositorio se requiere instalar el modulo 'node_modules' para ello se debe ejecutar el siguiente comando:
npm install
```

# Crear un componente (Manual)
```bash
1.- Crear una carpeta en 'src/app' con el 'nombre_componente'
2.- Crear un archivo llamado TypeScript 'nombre_componente'.component.ts
3.- Crear un componente dentro del archivo creado (parte 2)
4.- Crear un archivo html llamado 'nombre_componente'.component.html
5.- Registrar el nuevo componente en el archivo '/src/app/app.module.ts'
6.- Agregar el componente creado en el @NgModule -> declarations (Revisar archivo app.module.ts)
```

## Crear un componente (Automatico - CLI)
```bash
Crear un componente de manera automatica por CLI, configura automaticamente los archivos necesarios para poder ocupar el componente, es decir, se agregara el nuevo componente automaticamente al archivo 'app.module.ts'

ng generate component 'nombre_componente'
o
ng g c 'nombre_componente'

# Una vez creado el componente lo mandaremos a renderizar en el html de 'personas.component.html'
```


## Crear un componente inline
```bash
ng g c persona -s -t

Parametros:
    -s -> Hoja de estilo inline
    -t -> Codigo HTML inline
```


# Instalar Bootstrap
```bash
cd 'nombre_app'

npm install bootstrap jquery @popperjs/core
```

## Agregar Bootstrap al archivo 'angular.json'

```bash
1.- Abrir el archivo 'angular.json'
2.- Dirigirse hasta el arreglo "styles": []
3.- Agregar la siguiente linea de codigo

"styles": [
              "src/styles.css",
          ->  "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
```
```bash
4.- Dirigirse hasta el arreglo "scripts": []
5.- Agregar la siguiente linea de codigo

"scripts": [
              "node_modules/jquery/dist/jquery.slim.min.js",
              "node_modules/@popperjs/core/dist/umd/popper.min.js",    
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],
```