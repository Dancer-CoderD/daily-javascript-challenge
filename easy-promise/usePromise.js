/**
 *
 * # 使用场景1
 *
 * - 将图片的加载写成一个 Promise，一旦加载完成，Promise 的状态就发生变化。
 *
 */
const preloadImage = (path) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};

/**
 *
 * # 使用场景2
 *
 * - 通过链式操作，将多个渲染数据分别给个 then，让其各司其职。
 *
 */
getInfo()
  .then((res) => {
    let { bannerList } = res;
    return res;
  })
  .then((res) => {
    let { storeList } = res;
    return res;
  })
  .then((res) => {
    let { categoryList } = res;
    return res;
  });

/**
 *
 * # 使用场景3
 *
 * - 通过 all() 实现多个请求合并再一起，汇总所有请求结果，只需设置一个 loading 即可。
 *
 */
function initLoad() {
  loading.show();
  Promise.all([getBannerList(), getStoreList(), getCategoryList()])
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw new Error(error);
    })
    .finally(loading.hide());
}

/**
 *
 * # 使用场景4
 *
 * - 通过 race() 实现图片请求超时。
 *
 */
function requestImg() {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg";
  });
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("图片请求超时");
    }, 5000);
  });
}

Promise.race([requestImg(), timeout()])
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    throw new Error(reason);
  });
