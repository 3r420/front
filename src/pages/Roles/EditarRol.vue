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
        
        <form>
            <div class="form-group" >
                <label for="exampleFormControlInput1">Rol</label>
                <input type="text" class="form-control" placeholder=""  v-model="rol.nombre" required>
            </div>
            
            

            <div>
                <button class="btn" @click="EditarRol()">
                   Guardar Cambios 
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export default {
  components: {

  },
  data() {
    return {
        idRol: null,
        rol: {
            nombre: "",
        
      }

    };
  },
   mounted() {
   

    this.idRol = this.$route.params.idRol
    this.VerRol()
 
  },

  methods: {
   
    VerRol() {
         
        axios.get("http://192.168.56.103:3000/verDetalleRol/"+this.idRol )
          .then((res) => {
            //codigo
          
            this.rol = res.data
            console.log(rol);
            
          })
          .catch((err) => {
            //TODO mostrar ventana emergente sweetalert2 con el error
            // alert("error del servidor")
          })
      
  
    },
    EditarRol() {
    //   alert("aaaa")
      axios.put("http://192.168.56.103:3000/editarRol/"+this.idRol,this.rol)
        .then((res) => {
          //codigo
          console.log(res);
          Swal.fire("Editado exitosamente")

          this.$router.push("/rol");
          //ya se editó
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          Swal.fire("error del servidor")
        })
    }
  }
};
</script>