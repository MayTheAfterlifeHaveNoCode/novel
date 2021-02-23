<template>
  <div class="navigation">
    <div class="fixed">
      <van-nav-bar>
        <template #left>
          <van-image
            width="67"
            height="15"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABIBAMAAACU8SQRAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA4fGcFXjOJ7Q7WmlLh+5Ft9UAAAOBSURBVGje5ZpNaxNBGMfHJmnaWEPxIl5CDl68hIIHPZUIS/VUetBrqSAeQw5CPYUcRDwF8SaI5Oyh5C7I4lmkX0AwSV82L93PYLKZzO48u7M7MztP3OJz6TJMpj/+O/O8zRKytIYbtiPC2Q06PCYkx0+8IPH2fT6pTfStE0HXzgydGe344a6Ybs2bMFqnM89Jwfs73KID/WtAt3humnqzaekcAV22tUOh241Y1K0G6AjZ4OkI2bx+dBIWoBNZWjon03S42gH7T+iiTsXCtldI5+jTPaYDE2thT44DhqtdJ46u7CZZX3wqTn1v3EJ5s8l0Tqbpzs3QOTh0UxTtQAbV48a+yNOdZZqummm6Nsq+M0V3mmntuuHFbOqNY+gCR74Q6T8N0TVR6IBHEdCJ4ixbckAQ6eqadBuCghaJTjFHWRYt892sRidn6ejYfpxg0hFNutZyzkgxc19LPGaD9HQnyzl/EOnmTxUdukNYW2aKrgN7Grh0PbWqh22HA0S6vi4dW8vOIF2RrVVXrbb95o9nL2M8yoUmXSkUs5XobsGqRJMuOQugiEHXbsdVjHwz2Mu/8r5T65mnG9LlmpJ0ey6INDkXBkYmbCVd1UPLsijtBJGsyP7jwIbu031rnG4q0E5A95H98C7bxzWW89RN010qaRci4Ynv+3RDI3RVJe1Cb9F72+xgDLqG6Y5UtAufAM+e8s0FNqGWmm5HQbu8700eWpYV1bXaCdM981pfGlUP9Uay2u25CZn7Yjt6D1eMTrsmm9kHee02K8l07h1ZOmHvM7hmXV67H64E3cwNsh2oR5cDVZScdjddGbpZCElJtw76i9Jndl++uzjRpgvkaVdExd+1VkHX8unGJrRzjNL94gMZinbjJG8spPPj0aJolM7v9ldBtwsuJKXzOwW6qTZdgw9kqbVzjNIFfnWApd0oVK9I0hUD02ysfadNtwUCGYp2c2fg38e9tgIWX20XotqBpvfdpVw3LUyXgxdl0tqV1bTTolsHgUxeOwW6M126MghkKNrJ3TLF9T6X3U+gnfhrmbLCHaMu3QkIZFA7ZTqj2h2CQJZaO6N0HXiNh6FdX5euAQIZvBFI+kpL6jblXkeTDgYyFLrtUk2Lrii6xjNLR95o0ZVAmxeLjnz++u357weP3r96cbsm/2ZjPyK103+Vyt2FUMtbx59+Utp3M9p/RvcXlN2FjxlfktkAAAAASUVORK5CYII="
          />
        </template>
        <template #title>
          <van-button
            @click="$router.push('/?gender=male')"
            :class="{ active: gender === 'male' }"
            type="primary"
            size="mini"
            >男生</van-button
          >
          <van-button
            @click="$router.push('/?gender=female')"
            :class="{ active: gender === 'female' }"
            type="primary"
            size="mini"
            >女生</van-button
          >
        </template>
        <template #right>
          <van-image
            @click="$router.push('/Bookshelf')"
            width="22"
            height="22"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
          />
          <van-image
            width="22"
            height="22"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"
          />
        </template>
      </van-nav-bar>
      <div class="swch" @click="$router.push('/Search')">
        <van-search placeholder="" left-icon="" right-icon="search" />
        <van-swipe
          style="height: 24px"
          vertical
          :autoplay="3000"
          :show-indicators="false"
          :loop="true"
        >
          <van-swipe-item v-for="(item , index) in HotPush" :key="index">{{item.titem}}</van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["gender","HotPush"],
  
};
</script>
<style lang="less">
.navigation {
  .fixed {
    top: 0;
    z-index: 99999;
    width: 100%;
  }
  .van-nav-bar {
    background: #b83320;
  }
  .picture {
    margin-top: 100px;
  }
  .van-button--primary {
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    &.active {
      background: white;
      color: lightgray;
    }
  }
  .van-button--primary:nth-child(1) {
    border-radius: 15px 0 0 15px;
  }
  .van-button--primary:nth-child(2) {
    border-radius: 0 15px 15px 0;
  }
  .van-button--mini + .van-button--mini {
    margin: 0;
  }
  .swch {
    position: relative;
    background-color: white;
    .van-swipe {
      text-align: left;
      position: absolute;
      top: 18px;
      left: 0.75rem;
      .van-swipe-item{
        color: #999;
        font-size: 12px;
      }
    }
    .van-search {
      margin: 0;
      background-color: white;

      .van-search__content {
        background-color: #e9e9e9;
      }
    }
  }
  .van-swipe__indicators {
    left: 93%;
  }
  .icon {
    display: flex;
    padding: 0 1.375rem;
    text-align: center;
    justify-content: space-between;
    /* 设置子元素在侧轴方向的位置 元素居中显示 */
    align-items: center;
    background: white;
    span {
      float: 1;
      padding: 12px 0;
      p {
        margin: 0;
        font-size: 0.32rem;
      }
    }
  }
  .lately {
    height: 2.125rem;
    line-height: 2.125rem;
    background: white;
    font-size: 0.75rem;
    padding: 0 1.125rem;
    margin-bottom: 0.5rem;
    span:nth-child(1) {
      padding-right: 0.26667rem;
      border-right: 1px solid #000;
      color: rgb(172, 168, 168);
    }
    span:nth-child(2) {
      padding-left: 0.56667rem;
      color: red;
    }
  }
}
</style>