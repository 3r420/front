<template>
  <div>
    <drop-down class="nav-item" title="Admin"  icon="ti-linux">
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'categorias'}">Administrar Categorias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'subcategorias'}">Administrar SubCategorias</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'usuario'}">Ver Usuarios</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerencias'}">Ver Sugerencias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'valorR'}">Ver ValorR</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'pregunta'}">Ver Pregunta</router-link></a> 
   <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'respuesta'}">Ver Respuesta</router-link></a> 
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'rol'}">Gestionar Rol</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'ListaPreguntas'}">Preguntas</router-link></a> -->
  <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'archivo'}">Volver a Mis Archivos</router-link></a>
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'sugerenciaArchivo'}">mostrar Sugerencias</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'preguntaArchivo'}">Listar Pregunta Archivo</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'MisPreguntas'}">Mis Preguntas</router-link></a> -->
  <!-- <a class="dropdown-item"><router-link class="text-center form-text" :to="{name:'SinRespuesta'}">Sin Respuesta</router-link></a> -->
 

</drop-down>
    <div class="row">
      <!-- boton agregar -->
      <div class="col-8 offset-2">
        <router-link class="btn" :to="{
          name: 'Registrarrol'
        }">
          Agregar
        </router-link>
      </div>
      <!-- aqui termin el boton -->

      <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rol in listaRol" :key="rol.id">
                  <th scope="row">{{ rol.id_rol }}</th>
                  <td>{{ rol.nombre }}</td>
                  <td>
                    <router-link class="btn bg-primary text-white" :to="{
                      name: 'Verrol', params: { idRol: rol.id_rol }
                    }">
                      <i class="fas fa-eye"></i>
                    </router-link>
                    <router-link class="btn bg-success text-white" :to="{
                      name: 'Editarrol',
                      params: {idRol: rol.id_rol } 
                    }">
                      <i class="fas fa-edit"></i>
                    </router-link>

                    <button class="btn  bg-danger text-white" @click="eliminar(rol.id_rol)">
                      <i class="fas fa-trash-alt"></i>
                    </button>
                 


                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>


import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default {
  components: {

  },
  data() {
    return {
      listaRol: [],

    };
  },
  mounted() {
    this.listarRol(),
      eliminar(id)
  },
  methods: {
    listarRol() {
      //alert("jahahsa")
      axios.get("http://192.168.56.103:3000/listarRol")
        .then((res) => {

          this.listaRol = res.data
          console.log(res.data);
        })
        .catch((err) => {
          alert("error del servidor")
        })
    },
    eliminar(id) {
      // alert("hahaha")
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Estas seguro ?',
        text: "Esto se eliminara definitivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

        //  alert(id)
          // id = getIdToDelete();
          axios.delete(`http://192.168.56.103:3000/eliminarRol/`+id)
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Se elimino con exito.',
            'success'
          ).then(()=>{
              location.reload();
            });
        } else if (
          
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se eliminara :)',
            'error'
          )
        }
      })

    }
  }
};
</script>
<style></style>
