<template>
  <div class="newAppPage">
    <section>
        <h1>Ajouter une application</h1>
        <div class="form">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </p>
          <label for="title">Titre <span v-if="form.title">{{ form.title.length }}/80</span>: </label>
          <input id="title" v-model="form.title" type="text" name="title" maxlength="80">
          <label for="category">Catégorie : </label>
          <select id="category" v-model="form.category" name="category">
              <option value="">Choisir une catégorie</option>
              <option value="top">Top</option>
              <option value="action">Action</option>
          </select>
          <label for="pictureProfile">Icone de l'application : </label>
          <input id="pictureProfile" type="file" name="pictureProfile">
          <label for="cover">Photos de présentation : </label>
          <input id="cover" type="file" name="cover">
          <label for="description">Description : </label>
          <textarea id="description" v-model="form.longDescription" name="description" rows="5" cols="33"></textarea>
          <label for="version">Version : </label>
          <input id="version" v-model="form.version" type="text" name="version">
          <label for="content">Tout public : </label>
          <select id="content" v-model="form.content" name="content">
              <option value="">Choisir une option</option>
              <option value="oui">Oui</option>
              <option value="non">Non</option>
          </select>
          <label for="androidNecessary">Version : </label>
          <input id="androidNecessary" v-model="form.androidNecessary" type="text" name="androidNecessary">
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'defaultLayout',
  data(){
    return{
      errors: [],
      form: {
        title: "",
        category: "",
        longDescription: "",
        version: "1.0.0",
        installation: 0,
        size: "",
        androidNecessary: "",

      }
    }
  }
}
</script>

<style lang="scss">

.newAppPage{
  padding: 0 32px;

  section{
    width: 80%;
    margin: auto;
    @include big-tablet{
        width: 100%;
      }
    .form{
      display: flex;
      flex-direction: column;
      padding-bottom: 32px;
    
      label{
        margin-top: 16px;
      }
      input, textarea, select{
        padding: 8px;
        border-radius: 8px;
        border: 1px solid rgba(0,0,0,0.2);
      }
      textarea:focus, select:focus, input:focus, input:active{
          border: 1px solid $primary;
          outline: none;
        }
    }
  }
}
</style>
