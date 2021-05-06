<template>
  <div>
    <div class="container">
      <div class="d-flex create-rate-content">
        <div class="rate-title">
          <h4>Users</h4>
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
            <tr v-if="showLoader && !userArray.length">
              <td colspan="7">
                <div class="justify-content-md-center text-blue text-center">
                  Loading...
                </div>
              </td>
            </tr>
            <tr v-if="!userArray.length && !showLoader">
              <td colspan="7">
                <div class="justify-content-md-center text-blue text-center">
                  No Users Found
                </div>
              </td>
            </tr>
            <tr class="black" v-for="(user, index) in userArray" :key="index">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.website }}</td>
              <td>
                <div class="text-center">
                  <router-link :to="`/userPosts/${user.id}`">
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
export default class Users extends Vue {
  private tableHeaders = [
    {
      tableHeaderName: "Name",
      key: "key1"
    },
    {
      tableHeaderName: "Email",
      key: "key1"
    },
    {
      tableHeaderName: "Website",
      key: "key1"
    },
    {}
  ];
  private categories = [];
  @User.State
  public userArray;

  @User.State
  public showLoader;

  async created() {
    await this.$store.dispatch("User/getAllUsers");
  }
}
</script>

<style lang="scss"></style>
