# Task Manager Web

Aplicación frontend desarrollada en Angular para gestionar tareas, conectándose al backend de .NET.

## Tecnologías utilizadas

- [Angular v17+](https://angular.io/)
- SCSS para estilos
- Bootstrap 5 con [ng-bootstrap](https://ng-bootstrap.github.io/) para UI
- Angular CLI

## Estructura del proyecto

```
src/app/
├── tasks/
│   ├── models/
│   │   └── task.model.ts
│   ├── pages/
│   │   ├── task-list.component.{ts,html,scss}
│   │   └── task-form.component.{ts,html,scss}
│   └── services/
│       └── task.service.ts
├── app.component.*
├── app.routes.ts
└── styles.scss
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/cdejesusdx/task-manager-web.git
cd task-manager-web

# Instalar dependencias
npm install
```

## Configuración

Configura la URL base del backend en el archivo de entorno:
`src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiBaseUrl: 'https://localhost:44366'
};
```

## Scripts disponibles

```bash
ng serve            # Levantar app en desarrollo
ng build            # Generar build de producción
ng test             # Ejecutar pruebas unitarias
```

## Funcionalidades principales

- Visualización de tareas paginadas
- Crear, editar y eliminar tareas
- Cambiar estado de las tareas (Pendiente, En progreso, Completada)
- Validaciones con formularios reactivos
- Spinner de carga y manejo básico de errores

## Conexión con el Backend

Esta aplicación consume la API desarrollada en el repositorio [`task-manager-api`](https://github.com/cdejesusdx/task-manager-api).

Asegúrate de tener el backend levantado antes de usar la app web.

## Autor

Desarrollado por [Carlos Bautista](https://github.com/cdejesusdx) como parte de una prueba técnica para INSOLTech.
