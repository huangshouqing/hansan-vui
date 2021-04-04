<!-- 泡泡信息
events:
confirm 默认传boolean值为true
cancel 默认传boolean值为false
 -->
<template>
  <div class="popmessage">
    <hPopover trigger="click"
              ref="popover">
      <template slot="content">
        <div class="title">
          <slot name="icon">
            <i class="iconfont icon-zhengchang"></i>
          </slot>
          <span style="line-height:30px">
            <slot name="title">内容</slot>
          </span>
        </div>
        <div class="footer">
          <hButton size="mini"
                     type="default"
                     plain
                     @click.native="handleCancle">取消</hButton>
          <hButton size="mini"
                     type="primary"
                     @click.native="handleConfirm">确认</hButton>
        </div>
      </template>
      <!-- 默认插槽 -->
      <slot></slot>
    </hPopover>
  </div>
</template>

<script>
import hPopover from "../popover/popover.vue";
import hButton from "../button/button.vue";
export default {
  name: "hPopmessage",
  components: { hPopover, hButton },
  methods: {
    //点击确认
    handleConfirm() {
      this.$emit("confirm", true);
      this.close();
    },
    // 点击取消
    handleCancle() {
      this.$emit("cancel", false);
      this.close();
    },
    // 关闭popover
    close() {
      this.$refs.popover.close();
    },
  },
};
</script>
<style lang='stylus' scoped>
.popmessage {
  display: inline-block;
  vertical-align: top;
}

.gulu-popover-content-wrapper {
  .title {
    font-size: 12px;
    max-width: 100px;

    .icon-zhengchang {
      height: 100%;
      font-size: 12px;
      color: #FAAD14;
    }
  }

  .footer {
    text-align: right;
  }
}

.button>>>.btn-normal, .button>>>.btn-Hollow {
  font-size: 8px;
}
</style>