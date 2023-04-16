import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
//import Notifications from "@/pages/Notifications.vue";
//import Icons from "@/pages/Icons.vue";
//import Maps from "@/pages/Maps.vue";
//import Typography from "@/pages/Typography.vue";
//import TableList from "@/pages/TableList.vue";

import GestionarSubCategorias from "@/pages/Subcategorias/GestionarSubcategorias.vue";
import RegistrarSubCategorias from "@/pages/Subcategorias/RegistrarSubcategorias.vue";

import GestionarCategorias from "@/pages/Categorias/GestionarCategorias.vue"
import ListarPregunta from "@/pages/Preguntas/ListarPregunta.vue";
import ListarRespuesta from "@/pages/Respuestas/ListarRespuesta.vue";
import ListarUsuario from "@/pages/Usuarios/ListarUsuario.vue";
import ListarSugerencias from "@/pages/Sugerencias/ListarSugerencias.vue";
import ListarValoroR from "@/pages/ValoresR/ListarValoroR.vue";
import GestionarRol from "@/pages/Roles/GestionarRol.vue"
import Preguntar from "@/pages/VistasUsuario/Preguntar.vue"
import MisPreguntas from "@/pages/VistasUsuario/MisPreguntas.vue"
import SinRespuesta from "@/pages/VistasUsuario/SinRespuesta.vue"
import RespuestaP from "@/pages/VistasUsuario/RespuestaP.vue"
import ListaPreguntas from "@/pages/Profesional/ListaPreguntas.vue"
import Inicio from "@/pages/Registro/Inicio.vue"
// import dashlogin from "@/pages/Registro/dashlogin.vue"
// import DashboardLogin from "@/layout/dashboard/DashboardLogin.vue";



const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "INICIO",
        component: Dashboard,
      },
      {
        path: "stats",
        name: "Perfil",
        component: UserProfile,
      },
      {
        path: "categorias",
        name: "categorias",
        component: GestionarCategorias,
      },

      //rutas subcategorias
      {
        path: "categorias",
        name: "categorias",
        component: GestionarCategorias,
      },
      //finrutas Categorias
      {
        path: "subcategorias",
        name: "subcategorias",
        component: GestionarSubCategorias,
      },

      {
        path: "Registrarsubcategorias",
        name: "Registrarsubcategorias",
        component: RegistrarSubCategorias,
      },

      //fin rutas subcategorias
      {
        path: "usuario",
        name: "usuario",
        component: ListarUsuario,
      },
      {
        path: "pregunta",
        name: "pregunta",
        component: ListarPregunta,
      },
      {
        path: "respuesta",
        name: "respuesta",
        component: ListarRespuesta,
      },
      {
        path: "sugerencias",
        name: "sugerencias",
        component: ListarSugerencias,
      },
      {
        path: "valorR",
        name: "valorR",
        component: ListarValoroR,
      },
      {
        path: "rol",
        name: "rol",
        component: GestionarRol,
      },
      {
        path: "preguntar",
        name: "preguntar",
        component: Preguntar,
      },
      {
        path: "MisPreguntas",
        name: "MisPreguntas",
        component: MisPreguntas,
      },
      {
        path: "SinRespuesta",
        name: "SinRespuesta",
        component: SinRespuesta,
      },
      {
        path: "RespuestaP",
        name: "RespuestaP",
        component: RespuestaP,
      },
      {
        path: "ListaPreguntas",
        name: "ListaPreguntas",
        component: ListaPreguntas,
      },
      {
        path: "Inicio",
        name: "Inicio",
        component: Inicio,
      },

    ],
  },
  // {
  //   path: "/",
  //   redirect: "/dashlogin",
  //   component: DashboardLogin,
  //   children: [
  //     {
  //       path: "dashlogin",
  //       name: "dashlogin",
  //       component: dashlogin,
  //     },
      

  //   ],
  // },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
