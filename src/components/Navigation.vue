<template>
  <div class="Nacigat">
    <van-nav-bar>
      <template #left>
        <span class="Naleft" @click="retreat">
          <van-icon name="arrow-left" size="1.2rem" />
          <span>返回</span>
        </span>
      </template>
      <template #title>
        <h4><slot></slot></h4>
      </template>
      <template #right>
        <span>
          <van-image
            @click="$router.push('/Bookshelf')"
            width="22"
            height="22"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
          />
        </span>
        <span @click="$router.push('/Home')">
          <van-image
            width="22"
            height="22"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAC2UlEQVRoQ+2ZS6hOURTHf39JKOUxlfKOUkpMFEZSl5tCed0kBl7FNVKUujHFgC4jeRR5xFBSUmZKSvLOjYEBIQlJllaO+nC/c/bZ55z7fW5nTb7B2Xut9dv/dfZeZ39ikJgGCQc1SLspWStSK1LRClRaWmbWBcwFXgC9kr5WxFHdrmVmR4CdDYlfA9ZKel8FTOmKmJn7PAZs7SfhGwnMm7JhSgUxszHAaWBpSqLXgTWS3pUJUxqImY0CLgBLAhK8CWyQ9CpgbNCQUkASiEvA4qCovwY9AZZJ8t/CVhjEzMYBDrEoIpunQIck/y1khUDMbFbyTswukEUf0CnpfgEf8duvmXnyrsTkIgkkc58DKyXdi/UVpUgCcR6YHhu4n3mPgS5Jd2J85gYxsznAGWBGTMCMOR+BTZJc6VyWC8TMOoCzwOhcUfIN/gKsk3Qlz7RgEDNbDpwDhucJEDnWYbyduRo6PwjEzFYkSgwExO/cvcFcL+lyCEwmiJmtBk4OkBJ/5+wwGyX5xpJqTUHMbAiwB9gPDMtyVOHzb8Au4ISkH83ipIF4OV2E+LOmRDgDVqWVWRpIN3CoxGSKutot6XCMImOBHuCDd6rA+KKZRMz3c8V3ypfA8bTWP/Nl9+Bm9gCYGZFI0SmvgWmSPmU5CgXxVntqlrMKnvuX5AJJj7J8/w8gCyU9rEEaV8DMWllatSL/lGOEIt5a3AY+JweqH2gjgfnAiKx6b3juL3vLFLkLbAaeAd8bQIYm3zDeLUwIhGkpSI8k78/6NTPz09l7pxBrKcg2Sb0pIFv8HjiEAmgpyA5JfmXaTJHtwNEapMkKVHGyt7UifhM4JbAcygR56zeYkrxpTbVQRfwCbVKWs+R5mSB+Yz9PkscvBeSWd6FZzioA6ZM0MSRuqCKdwKnA+6x9kg6m7Fp7gQMhyQHdkvyfr0wLAsn00gYDapA2EOGPFGpFakUqWoFBU1o/ASNuD0IW//0zAAAAAElFTkSuQmCC"
        /></span>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    retreat() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less">
.Nacigat {
  .van-nav-bar {
    background: #b93321;
    color: white;
    h4 {
      color: white;
    }
  }
  .Naleft {
    height: 21px;
    line-height: 21px;
    position: relative;
    left: 5px;

    .van-icon {
      color: white;
      position: absolute;
      left: -16px;
    }
  }
}
</style>