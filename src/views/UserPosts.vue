<template>
  <div>
    <div class="container">
      <div class="d-flex create-rate-content">
        <div class="rate-title">
          <h4>User Posts</h4>
        </div>
      </div>
      <div class="submarket-info-content">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th
                v-for="tableHeader in tableHeaders"
                v-bind:key="tableHeader.tableHeaderName"
              >
                {{ tableHeader.tableHeaderName }}
              </th>
            </tr>
          </thead>
          <tbody class="white table-strip">
            <tr v-if="showLoader && !userPosts.length">
              <td colspan="7">
                <div class="justify-content-md-center text-blue text-center">
                  Loading...
                </div>
              </td>
            </tr>
            <tr v-if="!userPosts.length && !showLoader">
              <td colspan="7">
                <div class="justify-content-md-center text-blue text-center">
                  No Posts Found
                </div>
              </td>
            </tr>
            <tr
              class="black"
              v-for="(userPost, index) in userPosts"
              :key="index"
            >
              <td>{{ userPost.id }}</td>
              <td>{{ userPost.title }}</td>
              <td>
                <div class="text-center">
                  <router-link :to="`/post/${userPost.id}`">
                    <button class="btn btn-info mr-2">View Post</button>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const User = namespace("User");

@Component
export default class UserPosts extends Vue {
  private tableHeaders = [
    {
      tableHeaderName: "postId",
      key: "key1"
    },
    {
      tableHeaderName: "Title",
      key: "key1"
    },
    {}
  ];
  @User.State
  public userPosts;

  @User.State
  public showLoader;

  async created() {
    if (this.$route && this.$route.params && this.$route.params.userId) {
      await this.$store.dispatch("User/getAllUserPosts", {
        userId: this.$route.params.userId
      });
    }
  }
}
</script>

<style lang="scss"></style>
