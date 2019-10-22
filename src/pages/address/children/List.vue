<template >
  <div class="first">
    <!-- 顶部导航栏 -->
    <div class="navigation">
      <div class="returnClick" @click="onClickReturn">
        <img
          class="returnIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAYAAACm9ZtyAAAAAXNSR0IArs4c6QAABApJREFUWAnlWUlPFEEUruoeyLgwoCYmTPewROTgeJQrW0KCkOBFExNioheNetfoD8DoWUj0ZFQS8cgBNIqG6InoTT1hhNk4uByYg8jMdPne0I/0TO/LyEESqKWr3vfVq9f9vSoY+x9+hBBcUZRxVVXHsP7P15xUlOn2pCLwF4kYCUjGRiPqipKaEoJdI9ucc0F1LBtKIKmqNzSh3doF5PxpNptd3G1DJWZsRFlvV9XLQhN3ySbnbL73eM+leg80JCCSydR5wbRZAK96GEDf7N8XH1tdXf1DhKiMfAuqQcbFYwJnnK8cams9YwWOJCL1ALxmA5pgL+BVi1dXyPknmbOBXC73q9q2+CNb9AXqSqVSpyqaeAmTD6ABcPvX5pg8DEH33clgJAQ6OjpOVDRtCYDadPB8U0weWl9fzzqB47PQMdDZ2dldrmiv4F0/UgVn7AeAjwD4NzdwfbyXYdZjALy9VK68gz0/tjOCb7KYNLyRyXy0nmHuDRyEEHCHK4ItMyFOolnY898SZ6ch4JbNMPY9gbYgnU4fBPBFA3iJM3HOL3iVuD036yddXV3x7VJ5Adw+pI/QOJMmC4XsM+sZzr2+PDA4OBjbLpXmDOAQxvxqUHCk5lkLABQ0PfUIpGyC1sQlfrOQyz2kdpDSswcUVb0vmJgkEIlLUwB+j9pBS09vAWq6UVZB2WYK+fz1oKDGea4EUNNrZJXx2Xw+e6FeVo1G/dQdY8BG0y9GBY5EbT1goelvm5tiY2tra1t+Vug21jIIbTR9ImpwSw8E0XS3VTo9r5HjoJruBOD2rGYLKhXtAUxowUkQaAVdVjfcjIR5XkMgjKGgc2sIyLJ0BQwV0Rh8epPb5cpr1Pygxr3MM72GpiBk/LMssX6nxNILkN2YGg/gINR00PazEAOlnUkijdqPOYCdkTD9Jg+QsT39ECEJ1HhIsXYPlZgDQC7wHHMCIhlFaesBMt5oMTLFAAFTiZoP2n+H2pgTQG4wTe2wZc2X0M5Ysbi5lEgkjsLzPn1MX6KlNY79dnO89rtuARnSU7InxqxIT8lCZUWuW0AEMAfo7e2BXIDNUx8mKqCc+PEK/OPZA4Swp2k5ksCcAM77E6BWKzopicF9QP3lExF2K317gAxaHM224Lsx6vd0FJgAEjEfTlkxJkt4J/CBiLqVoQjoJLrhhPwe1RPbEKQ/Y7Lcn8lkvriB43PPb4GdMbwHgFWPIDCOwXsCvC/AewO7Ocb+0ATQGK5WlqRRqPrOJUJvgXE1plzCwyVVJB4gEqZcAi4v3HKJSD1ARPzkEpF6gAjY5BJzVrlEQzxARLzkEg0lgETqj/ayxMchVhaIZEO2gIxjCUf52/CNmKE+lHWq/7NyJ5fYw3/ZOK30L7lS0JLnwwCCAAAAAElFTkSuQmCC"
          alt
        />
      </div>
      <van-nav-bar title="地址管理" fixed @click-right="onClickSave" />
    </div>
    <!-- 中部地址栏 -->
    <div class="view-main">
      <div class="address-list-item">
        <div class="info">
          <div class="addressee">陈媛媛&nbsp;&nbsp;1888 1888 1888</div>
          <div class="address-detail">广东省深圳市龙岗区龙岗区龙岗区龙岗街道左创智慧创新大夏</div>
        </div>
        <div class="operation">
          <div class="isDefault">
            <van-checkbox v-model="checked" checked-color="#C71D23"> <span>默认地址</span> </van-checkbox>
          </div>
          <div class="delEdit">
            <div class="delete" @click="delButton">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAURJREFUWAntV0tOw0AMtYeqO3bdlLMgdmyAK5Rlr4BoCQqM2gipt6g4Amwj1C3ngCtQocaMgZTGcvMDxAKPFCXP4/dkvTxFGQBbRQewCMvReeTvAOiovCvfxfvER8c5qrq7qoa2+4hEbbnGYwfWGWn2/n/KvK8c/VpG6oxqOarjUqGH8/KRmUL526BMt6Or1/1o6ezt1e26fxrWzYFtkE03+NkcMUekAxJbRswR6YDElhFzRDogsZoRBHzmxtFk0peEtjjXyrWljjoIID1yI73QQBJa42V2+s791JY66h8aOjejFZ0gZn506bHruvM4PnuS5Do4jm/2lqvXMER2hQgZa2u89blGboYBxsGT63Bw1F2ThArMQxC5KPEXU611RytybfGQLvYPDtPgSi8cw3ZDia/mCyE4iSlAZ5j48W1zgf/KeAOwFlCgegMJjAAAAABJRU5ErkJggg=="
                alt
              />
              <span>删除</span>
            </div>
            <div class="edit" @click="editButton">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAgpJREFUWAntlzFLw0AUx++SalERQXTxKzi6quDgoqOzqx9AEJvUlNBIQhH6BRyli+Cooy3q6qZfwcWpQy2tbc57SZ/k0p5NeqEg9CC53LuX937535G7I2RWRAWo2JxOy7arqx2/dbSyOHdbKBSakDU3KrVhuTuU9s4YIVuEkY1RPnIbffAc61DWb7jueqfdqhPCNptf3+B2DbchEMO6NDmEwxjRwCFtoZS/KSkAQdr9AIIQ+p7Xlu7QVRiagRIN3tnjjqV5bf7Gts8/0FmljkOQBX3PM81PjCkoEgwHV4JSWnLLVgWdVOtxEBBfkD+YE9wISqgmx/eTQICvAIITc1rDgbDDINEexeekSmAaURG0KtZpISBd5iCTQGQOMilEpiBpIAzLuYcLALAI/xE0pq3TQISx2UE8h/IcSQ8RRwjbSiBZQQCKEojW6Z3CKgoLWHztGP3dcqvSHGFUr2lan/h5vRpdwOTp5D1KIK5dfOOhDXn45D1KQ5M8zXjPGUhco5ki/0QRSoKNsm1XUh4h4t8nb//GHuRCT2GO8C39K3R0/e4xOmRdY2zMhfGFHxpjuSu+k+eHI1Y2S06wic5q/wpKhBCsTCnxIRdCQC2ca8AQHrD8iQ9YEOOvEkJoludcuFE/PdqA55enx+ft3f06pf4ax1zmJrjUC58THKLBlTjxnGJNPeAswpQU+AERPvZb0LYpOgAAAABJRU5ErkJggg=="
                alt
              />
              <span>编辑</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部新建栏 -->
    <div class="address-list-button" @click="newAddress">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAJtJREFUWAntlUsKwCAMRLXtxut4gZ69F/A8rvpRiMjgRkMhiwkIjvgZXwLxzxfOQGxaD3fOrgxteC2RK8bq4UxJ5UVNRPV6d5hGOhh1SiIkggRQs0ZIBAmgZo0gkdZ9pYvihr+1dG0zqWlEVn8uJOVnq/eYIUIjmEISIREkgJo1QiJIALWZGjnQ2azeQ5g9Mtyv7r7DWxcWzaTmBRgwIx+QoVW4AAAAAElFTkSuQmCC"
          alt
        />
        <span>新建地址</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: ""
    };
  },
  methods: {
    //   导航栏返回事件
    onClickReturn() {
      alert("返回");
    },
    //删除按钮事件
    delButton() {
      alert("确认删除");
    },
    //编辑按钮事件
    editButton() {
      alert("编辑");
    },
    newAddress() {
      alert("新建地址");
    }
  }
};
</script>
<style lang="less">
.van-checkbox__label {
  color: #797d82;
}
</style>

<style lang="less" scoped>
// body的样式
.first {
  background: #f4f4f4;
  width: 100vw;
  min-height: 100vh;
}
// 导航栏
.navigation {
  height: 44px;
  width: 100vw;
  display: flex;
  position: fixed;
}
.van-hairline--bottom {
  height: 44px;
}
// 返回按钮
.returnClick {
  display: flex;
  height: 100%;
  width: 41px;
  box-sizing: border-box;
  align-items: center;
}
// 返回图标
.returnIcon {
  margin-left: 14px;
  vertical-align: middle;
  width: 11px;
  height: 19px;
  font-size: 15px;
  color: #191a1b;
}
// 顶部导航栏地址管理样式
.van-nav-bar__title {
  font-size: 17px;
  font-family: 600;
}

// 顶部导航栏左边返回号样式
.returnClick {
  z-index: 999;
  position: relative;
}
.van-icon-arrow-left {
  color: black;
  height: 100%;
  font-size: 20px;
  left: 5px;
}
// 中部地址栏
.view-main {
  position: relative;
  top: 44px;
  bottom: 50px;
  overflow-y: scroll;
  width: 100%;
  box-sizing: border-box;
  .address-list-item {
    background-color: #fff;
    margin-bottom: 10px;
    box-sizing: border-box;
    .info {
      padding: 15px;
      box-sizing: border-box;
      border-bottom: #f4f4f4 1px solid;
      .addressee {
        font-size: 15px;
        height: 22px;
        box-sizing: border-box;
      }
      .address-detail {
        margin: 2px 0 0;
        font-size: 13px;
        color: #797d82;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-height: 50px;
        box-sizing: border-box;
        height: 19px;
      }
    }
    .operation {
      padding: 10px;
      color: #797d82;
      font-size: 13px;
      position: relative;
      display: flex;
      justify-content: space-between;
      .isDefault {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .van-checkbox{
          padding-left:5px;
        }
        span {
          vertical-align: middle;
          line-height: 18px;
          font-size: 13px;
          color: #797d82;
          
        }
      }
    }
    .delete {
      margin-right: 5px;
      float: right;
      box-sizing: border-box;
      color: #797d82;
      font-size: 13px;
      padding-right: 10px;

      img {
        width: 17px;
        height: 17px;
        vertical-align: middle;
        color: #797d82;
        font-size: 13px;
      }
      span {
        vertical-align: middle;
        color: #797d82;
        font-size: 13px;
        padding-left: 3px;
      }
    }
    .edit {
      float: right;
      margin-right: 15px;
      box-sizing: border-box;
      color: #797d82;
      font-size: 13px;
      img {
        width: 17px;
        height: 17px;
        vertical-align: middle;
        color: #797d82;
        font-size: 13px;
      }
      span {
        vertical-align: middle;
        color: #797d82;
        font-size: 13px;
        padding-left: 3px;
      }
    }
  }
}
// 底部新建栏
.address-list-button {
  position: absolute;
  bottom: 0;
  background-color: #c53539;
  z-index: 100;
  height: 50px;
  position: fixed;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  
  div {
    height: 21px;
    display: flex;
    span {
      font-size: 17px;
      color: #ffffff
    }
  }
  img {
    font-size: 16px;
    height: 17px;
    width: 17px;
    margin-right: 15px;
    background-color: #c53539;
    color: #ffffff;
    border-radius: 50%;
  }
}
</style>