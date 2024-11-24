<template>
  <div id="app">
    <main class="containerTodo">
      <div class="containerTop"><p class="textTop">to do list</p></div>
      <div class="containerCenter">
        <div class="containerTask">
          <div class="containerListTask">
            <div class="taskItem">
              <label class="checkBox">
                <input type="checkbox" name="option" class="checkBoxInput" />
                <span class="checkBoxSpan"></span>
              </label>
              <p class="nameTask">Task 1</p>
              <button class="closeTaskButton">✖</button>
            </div>
          </div>

          <div class="buttonAddTask">
            <div class="taskAddItem">
              <p class="taskAddText">Add a new task</p>
            </div>
          </div>
        </div>
      </div>
      <div class="containerBottom">
        <div class="leftText">
          <p class="textPages">1/3</p>
          <p class="textAction">left</p>
        </div>
        <div class="rightText">
          <p class="textButtonAll">All</p>
          <p class="textActiveButton">Active</p>
          <p class="textCompketedButton">Completed</p>
        </div>
      </div>
    </main>
    <img src="./assets/backgroundTaskSVG.png" alt="" class="svgBack" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    //
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.checkBoxInput {
  display: none;
}

body {
  $secondary-color: #fe9526;
  $color-100: #fff4e9; // 100
  $color-200: #ffdfbe; // 200
  $color-300: #ffca93; // 300
  $color-400: #feb567; // 400
  $color-500: #fea03c; // 500
  $color-600: #e58622; // 600
  $color-700: #b2681b; // 700
  $color-800: #7f4b13; // 800
  $color-900: #331e08; // 900
  $color-opacity-8: #fe952614; // 8% прозрачности
  $color-opacity-16: #fe952629; // 16% прозрачности
  $color-opacity-24: #fe95263d; // 24% прозрачности
  $color-opacity-32: #fe952652; // 32% прозрачности
  $color-opacity-40: #fe952666; // 40% прозрачности
  $color-opacity-48: #fe95267a; // 48% прозрачности
  $color-xyeta: #ffecd8;
  $color-xyeta-42: #7f4b1342;
  $color-xyeta2: #fc8f1a;
  @mixin font-style1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
  }
  @mixin font-style2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #7f4b13;
  }
  background: linear-gradient(to right, #ff7e5f, #feb567);
  #app {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    .containerTodo {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 540px;
      height: 437px;
      background-color: $color-100;
      border: 2px solid $color-300;
      .containerTop {
        background-color: $color-300;
        color: $color-800;
        display: grid;
        place-items: center;
        min-height: 50px;
      }
      .containerCenter {
        color: $color-800;
        padding: 30px;
        height: 100%;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        .containerTask {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          width: 100%;

          .containerListTask {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            width: 100%;
            .taskItem {
              padding: 0px 20px;
              display: flex;
              gap: 23px;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              height: 50px;
              background: $color-200;
              border-radius: 10px;
              .checkBox {
                cursor: pointer;
                width: 24px;
                height: 24px;
                .checkBoxSpan {
                  display: block;
                  width: 24px;
                  height: 24px;
                  border-radius: 5px;
                  border: 1px solid $color-400;
                  position: relative;
                  z-index: 1;
                  &:hover {
                    background-color: $color-300;
                  }
                }
                .checkBoxSpan::after {
                  display: block;
                  content: "";
                  background-color: $color-400;
                  position: absolute;
                  width: 24px;
                  height: 24px;
                  border-radius: 5px;
                  opacity: 0;
                }
                .checkBoxSpan::before {
                  content: "";
                  display: block;
                  position: absolute;
                  z-index: 5;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background-image: url(./assets/galka.svg);
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: contain;
                  width: 14px;
                  height: 14px;
                  border-radius: 5px;
                  opacity: 0;
                }
                .checkBoxInput:hover + .checkBoxSpan::before {
                  opacity: 1;
                }
                .checkBoxInput:checked + .checkBoxSpan::after {
                  opacity: 1;
                }
                .checkBoxInput:checked + .checkBoxSpan::before {
                  opacity: 1;
                }
              }
              .nameTask {
              }
              .closeTaskButton {
                cursor: pointer;
                margin-left: auto;
                background-color: transparent;
                border: 1px solid $color-300;
                color: $color-300;
                width: 24px;
                height: 24px;
                border-radius: 5px;
                &:hover {
                  border: 1px solid $color-xyeta2;
                  color: $color-xyeta2;
                }
              }
            }
          }
          .buttonAddTask {
            cursor: pointer;
            display: grid;
            place-items: center;
            width: 100%;
            height: 50px;
            background: $color-xyeta;
            color: $color-300;
            background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23ffca93' stroke-width='4' stroke-dasharray='20%2c 20' stroke-dashoffset='17' stroke-linecap='square'/%3e%3c/svg%3e");
            //Для себя сейвлю https://kovart.github.io/dashed-border-generator/
            border-radius: 10px;
            .taskAddItem {
              .taskAddText {
              }
            }
          }
        }
      }
      .containerBottom {
        background-color: $color-300;
        color: $color-xyeta-42;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 30px;
        min-height: 50px;
        .leftText {
          display: flex;
          gap: 2px;
          .textPages {
          }
          .textAction {
          }
        }
        .rightText {
          display: flex;
          text-align: center;

          gap: 25px;
          .textButtonAll {
            display: grid;
            place-items: center;
            width: 45px;
            height: 34px;
            border-radius: 10px;
            border: 1px solid $color-xyeta-42;
          }
          .textActiveButton {
            display: grid;
            place-items: center;
          }
          .textCompketedButton {
            display: grid;
            place-items: center;
          }
        }
      }
    }
    .svgBack {
      position: absolute;
      top: 50%;
      left: 70%;
      width: auto;
      height: 70%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
}
</style>
