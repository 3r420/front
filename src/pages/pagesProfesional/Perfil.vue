<template>
    <card class="card" title="Editar Perfil">
      <div>
        <form @submit.prevent>
          <div class="row">
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Nombre"
               placeholder="erazo"
                v-model="user.nombre"
              >
              <button class="btn btn-sm bg-success text-white">
                      <i class="fas fa-edit"></i>
                    </button>
              
              </fg-input>
            </div>
            <div class="col-md-6">
               <fg-input
                type="text"
                label="Apellido"
                placeholder="Trochez"
                v-model="user.apellido"
              >
              
              </fg-input> 
              
  
            </div>
          </div>
    
          <div class="row">
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Telefono"
                placeholder="Telefono"
                v-model="user.telefono"
              >
              </fg-input>
            </div>
            
            <div class="col-md-6">
              <fg-input
                type="text"
                label="Dirección"
                placeholder="Popayan"
                v-model="user.direccion"
              >
              </fg-input>
            </div>
          </div>
          
  
          <div class="text-center">
                  <button class="btn btn-primary" @click="updateProfile()">
                    Guardar Respuesta
                  </button>
                </div>
          <div class="clearfix"></div>
        </form>
      </div>
    </card>
  </template>
  <script>
  import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
  import axios from 'axios';
  export default {
    data() {
      return {
        user: {
         // correo_electronico: "",
          nombre: "",
          apellido: "",
          direccion: "",
          telefono: "",
         // contrasena: "",
        },
        us:"",
      };
    },
    mounted(){
      this.us = JSON.parse(localStorage.getItem("usuarios"))
    },
    methods: {
      updateProfile() {
        this.correo_electronico=this.us.correo_electronico,
        this.contrasena=this.us.contrasena
        
        
        axios.put("http://192.168.56.103:3000/editarUsuario/"+this.us.id_usuario,this.user)
        .then((res) => {
            console.log(res);
            Swal.fire("Actualizacion exitosa"+this.us.id_usuario)
            this.$router.push("/login");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("error del servidor" );
          });
      },
    },
  };
  </script>
  <style></style>
  