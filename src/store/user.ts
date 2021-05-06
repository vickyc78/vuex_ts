import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import service from "../services/apiService.js";
@Module({ namespaced: true })
class User extends VuexModule {
  public showLoader = true;
  public userArray = [];
  public userPosts = [];
  public onePost = {};

  @Mutation
  public setUsers(value) {
    this.userArray = value;
  }
  @Mutation
  public setUserPosts(value) {
    this.userPosts = value;
  }
  @Mutation
  public setOnePost(value) {
    this.onePost = value;
  }
  @Mutation
  public setLoader(value) {
    this.showLoader = value;
  }

  @Action
  public async getAllUsers() {
    const userData = await service.apiCallWithDataGetMethode("/users");
    if (userData && userData.data && userData.status == 200) {
      this.context.commit("setLoader", false);
      this.context.commit("setUsers", userData.data);
    } else {
      this.context.commit("setLoader", false);
      this.context.commit("setUsers", []);
    }
  }
  @Action
  public async getAllUserPosts(data: any) {
    const userPostData = await service.apiCallWithDataGetMethode(
      `/posts?userId=${data.userId}`
    );
    if (userPostData && userPostData.data && userPostData.status == 200) {
      this.context.commit("setLoader", false);
      this.context.commit("setUserPosts", userPostData.data);
    } else {
      this.context.commit("setLoader", false);
      this.context.commit("setUserPosts", []);
    }
  }
  @Action
  public async getOneUserPost(data: any) {
    const onePostData = await service.apiCallWithDataGetMethode(
      `/posts/${data.postId}`
    );
    if (onePostData && onePostData.data && onePostData.status == 200) {
      this.context.commit("setLoader", false);
      this.context.commit("setOnePost", onePostData.data);
    } else {
      this.context.commit("setLoader", false);
      this.context.commit("setOnePost", {});
    }
  }
}
export default User;
