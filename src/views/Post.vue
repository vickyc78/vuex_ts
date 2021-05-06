<template>
  <div>
    <div class="container">
      <div class="text-center font-weight-bold"><h4>Post Description</h4></div>
      <div class="row">
        <div class="col-md-6 col-sm-10 col-lg-6 mx-auto">
          <div class="card">
            <div class="card-body">
              <form name="user" class="form">
                <div class="form-group">
                  <div class="text-left">
                    <label>Post Id:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="onePost.id"
                      readonly
                    />
                  </div>
                  <div class="text-left pt-3">
                    <label>User Id:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="onePost.userId"
                      readonly
                    />
                  </div>
                  <div class="text-left pt-3">
                    <label>Title:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      v-model="onePost.title"
                      readonly
                    />
                  </div>
                  <div class="text-left pt-3">
                    <label>Description:</label>
                    <div>
                      <textarea
                        name="description"
                        id=""
                        rows="3"
                        class="w-100"
                        v-model="onePost.body"
                        readonly
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const User = namespace("User");

@Component
export default class Post extends Vue {
  @User.State
  public onePost;

  async created() {
    if (this.$route && this.$route.params && this.$route.params.postId) {
      await this.$store.dispatch("User/getOneUserPost", {
        postId: this.$route.params.postId
      });
    }
  }
}
</script>

<style lang="scss"></style>
