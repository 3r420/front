<template>
  <div>
    <div>
      <div class="col-6 offset-3">
        <card class="card-user">
          <div class="image">
            <img src="@/assets/img/background2.jpg" alt="..." />
          </div>
          <div>
            <div class="author">
              <img class="avatar border-white" src="@/assets/img/faces/face-4.jpg" alt="..." />
              <h4 v-if="us.rol_id==3">Profesional</h4>
              <h4 class="title">{{ us.nombre + " " + us.apellido }}</h4>
              <div>
                <h5 class="title">Vas a responder a la siguiente pregunta:</h5>

                <h4>
                  {{ listaPregunta.descripcion }}
                </h4>
              </div>
            
            </div>
            <!-- <div class="text-right">
           <p-button type="info" round @click.native.prevent="">
             Responder
           </p-button>
         </div> -->

            <div class="form-group">
              <textarea class="form-control" placeholder="Escriba aquí su respuesta" id="floatingTextarea2"
                style="height: 50px" 
                v-model="respuesta.descripcion"   
                v-on:keyup.enter="RespuestaValided()"
                 >
              </textarea >
              <h5 style="color:#FF0000" v-if="!respuesta.descripcion && estado==true">*El campo no puede estar vacio</h5>
             
    



              <div class="text-center">
                <button class="btn btn-primary" @click="RespuestaValided()">
                  Guardar Respuesta
                </button>
                
              </div>
              
            </div>
          </div>
          
        </card>
      </div>
    </div>

    <div class="col-10 offset-1" v-for="respuesta in listaRespuestas" :key="respuesta.id_respuesta">
      <card class="card-Mpregunta">
        <div class="Mimagen">
          <img src="@/assets/img/background2.jpg" alt="..." />
          {{ preUs.nombre + " " + preUs.apellidao }}
        </div>
        <div>
          <div class="Mfoto">
            <img class="Musuario border-white" src="@/assets/img/faces/face-4.jpg" alt="..." />
            <h3 class="Mnombre">{{ respuesta.hora_fecha }}</h3>
            <h6>te respondio:</h6>
            <br />
          </div>
          <h5>
            {{ respuesta.descripcion }}
          </h5>
          <small class="text-right">
            {{ respuesta.createdAt }}
          </small>
        </div>


        <!-- <div v-for="preguntas in listaRespuestas">
          <label for="floatingTextarea2">
            {{ preguntas.descripcion }}
          </label>
        </div> -->
        <!-- <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
        </div> -->
        <!-- <div class="text-right">
          <p-button type="info" round @click.native.prevent="">
            Responder
          </p-button>
        </div> -->
      </card>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import axios from "axios"
export default {
  components: {},
  data() {
    return {
      idPregunta: null,
      listaRespuestas: [],
      listaPregunta: [],

      respuesta: {
        usuario_id: "",
        pregunta_id: "",
        descripcion: "",
        hora_fecha: "",
      },
      pregunta: [],
      us: {},
      preUs: {},
      preid: {},
      reId: "",
      estado:false

    };
  },
  async mounted() {
    this.us = JSON.parse(localStorage.getItem("usuarios"));
    this.idPregunta = this.$route.params.preguntaId;
    //this.respuestasPorUser(),
    this.listarRespuestas(),
      this.verPregunta();
    // this.respuestasPorUser()
    //this.respuestasPorUserid()
  },
  methods: {
    listarRespuestas() {
      // alert("aaaa")
      axios
        .get(
          "http://192.168.56.103:3000/ListarRespuestasPorPreguntaId/" +
          this.idPregunta
        )
        .then((res) => {
          //codigo
          this.listaRespuestas = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          Swal.fire('Error del servidor')
        });
    },

    verPregunta() {
      // alert("aaaa")
      axios
        .get("http://192.168.56.103:3000/verDetallePregunta/" + this.idPregunta)
        .then((res) => {
          //codigo
          // alert("bbbb")
          console.log(res.data);
          this.listaPregunta = res.data;
        })
        .catch((err) => {
          //TODO mostrar ventana emergente sweetalert2 con el error
          Swal.fire('Error del servidor')
        });
    },

    // nuevaRespuesta() {
    //   //alert("jahkajs")
    //   this.respuesta.usuario_id = this.us.id_usuario;
    //   console.log(this.respuesta.usuario_id);
    //   this.respuesta.pregunta_id = this.idPregunta;
    //   console.log(this.respuesta.pregunta_id);
    //   console.log(this.respuesta.descripcion);
    //   this.respuesta.hora_fecha=this.us.nombre
    //   axios .post("http://192.168.56.103:3000/nuevaRespuesta", this.respuesta)
    //     .then((res) => {
    //       console.log(res.data);
    //       alert("respuesta exitosa")
    //       // this.reId = res.data.id_respuesta;
    //       // console.log(this.reId);

    //      // this.respuestasPorUser(); // localStorage.setItem("respuesta",Json.strinfiy(re.data.respuesta))
    //       // console.log(res.data)
    //       // this.$router.push("/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       alert("error del servidor" + err);
    //     });
    // },
    RespuestaValided() {
      this.respuesta.usuario_id = this.us.id_usuario;
      console.log(this.respuesta.usuario_id);
      this.respuesta.pregunta_id = this.idPregunta;
      console.log(this.respuesta.pregunta_id);
      console.log(this.respuesta.descripcion);
      this.respuesta.hora_fecha = this.us.nombre
      if (!this.respuesta.descripcion) {
        Swal.fire('Error la respuesta esta vacia')
        this.estado=true
      }
      else {
        axios.post("http://192.168.56.103:3000/nuevaRespuesta", this.respuesta)
          .then((res) => {
            console.log(res.data);
            Swal.fire('Respuesta guardada exitosamente')
           setInterval(()=>{
            window.location.reload();
           },1000)
            // this.reId = res.data.id_respuesta;
            // console.log(this.reId);

            // this.respuestasPorUser(); // localStorage.setItem("respuesta",Json.strinfiy(re.data.respuesta))
            // console.log(res.data)
            // this.$router.push("/");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire('Error del servidor')
          });
      }
    },

    //pruebas paratraer el usuario que realiza la respuesta
    // respuestasPorUser() {
    //   alert("si");
    //   console.log(this.us);
    //   console.log(this.reId);
    //   axios
    //     .get("http://192.168.56.103:3000/resxUser/" + this.reId)
    //     .then((res) => {
    //       alert("si lista");
    //       this.preUs = res.data.Usuario;
    //       console.log(this.preUs);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // respuestasPorUserid(){
    //  axios.get("http://192.168.56.103:3000/ListarRespuestasPorUsuario/"+this.reId)
    //  .then((res)=>{
    //   console.log(this.preid);
    //   this.preid=res.data

    //  })
    //  .catch((err)=>{
    //   console.log(err)
    //  })
    // },
  },
};
</script>
  