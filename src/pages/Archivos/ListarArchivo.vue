<template >
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

        <!-- Card with image -->
    <!-- <div class="col-12">
      <card class="card-plain">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <img src="@/assets/img/foto-negra.png" alt="Image" />
            </div>
            <br>
            <div class="col-md-6">
              <h4 class="card-title">Bienvenido a Ayudagro Administrador</h4>
              <p class="card-text">Card description or additional information.</p>
            </div>
          </div>
        </div>
      </card>
    </div> -->
      
             <!-- boton agregar -->
    <div class="col-8 offset-2">
      <router-link
      class="btn"
      :to="{
        name: 'Registrararchivo'
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
                <th scope="col">Nombre de la Ruta</th>
                <th scope="col">Url</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="archivo in listaArchivos">
                <th scope="row">{{ archivo.id_archivo }}</th>
                <td>{{ archivo.nombre_archivo }}</td>
                <td>{{ archivo.url }}</td>
                <td>
                  <router-link class="btn bg-primary text-white" :to="{name: 'Verarchivo', params: {idArchivo: archivo.id_archivo} }">
                    <i class="fas fa-eye"></i>
                  </router-link>
                  <router-link class="btn bg-success text-white" :to="{ name: 'Editararchivo', params: { idArchivo: archivo.id_archivo }}">
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button class="btn  bg-danger text-white" @click="eliminar(archivo.id_archivo)">
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
  </template>
  <script>
  
  
  import axios from 'axios';
  import Swal from 'sweetalert2'
  
  
  export default {

 
    components: {
   

      
    },
    data() {
      return {
       
        listaArchivos:[],
       
       
       
      };
    },
    mounted(){
  
      this.listarArchivos(),
      eliminar()
      
    },
    methods: {
      
   



      listarArchivos() {
         //alert("jahahsa")
        axios.get("http://localhost:3000/listarArchivo")
        .then((res) => {
  
          this.listaArchivos = res.data
          console.log(res.data);
        })
        .catch((err) => {
          alert("error del servidor")
        })
      },
      eliminar(id){
      // alert("hahaha")
      const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-danger',
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
    axios.delete("http://localhost:3000/eliminarArchivo/"+id)
    swalWithBootstrapButtons.fire(
      'Eliminado!',
      'Se elimino con exito.',
      'danger'
    ).then(()=>{
              location.reload();
            });
  } else if (
    /* Read more about handling dismissals below */
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
  