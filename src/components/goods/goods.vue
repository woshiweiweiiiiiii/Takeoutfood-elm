<template>
	<div class="goods-container">
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li v-for="(item, index) in goods" class="menu-item" :class="{ current: currentIndex === index }" @click="selectMenu(index)">
						<span class="text">
							<span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
							{{ item.name }}
						</span>
					</li>
				</ul>
			</div>
			<div class="foods-wrapper" ref="foodsWrapper">
				<ul>
					<li v-for="item in goods" class="foods-list foods-list-hook">
						<h1 class="title">{{ item.name }}</h1>
						<ul>
							<li v-for="food in item.foods" class="food-item">
								<div class="icon" @click="selectFood(food)"><img :src="food.icon" width="57" height="57" /></div>
								<div class="content">
									<h2 class="name">{{ food.name }}</h2>
									<p class="desc">{{ food.description }}</p>
									<div class="extra">
										<span class="count">月售{{ food.sellCount }}份</span>
										<span>好评率{{ food.rating }}%</span>
									</div>
									<div class="price">
										<span class="now">￥{{ food.price }}</span>
										<span class="old" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
									</div>
									<div class="carcontrol-wrapper"><carcontrol :food="food"></carcontrol></div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- <shopcar v-show="carShow" :selectFoods="selectFoods" :deliveryPrice="store.deliveryPrice" :minPrice="store.minPrice" @hideCar="hideCar"></shopcar> -->
			<shopcar v-show="carShow" :selectFoods="selectFoods" :deliveryPrice="store.deliveryPrice" :minPrice="store.minPrice" @hideCar="hideCar"></shopcar>
		</div>
		<transition name="food"><food v-show="foodShow" :food="selectedFood" @closeFood="closeFood"></food></transition>
	</div>
</template>

<script>
import axios from 'axios';
import BScroll from 'better-scroll';
import shopcar from '../shopcar/shopcar';
import carcontrol from '../carcontrol/carcontrol';
import food from '../food/food';

const ERR_OK = 0;
export default {
	props: ['store'],
	data() {
		return {
			goods: [
    {
      "name": "热销榜",
      "type": -1,
      "foods": [
        {
          "name": "皮蛋瘦肉粥",
          "price": 10,
          "oldPrice": "",
          "description": "咸粥",
          "sellCount": 229,
          "rating": 100,
          "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足。",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "很喜欢的粥",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "扁豆焖面",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 188,
          "rating": 96,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "info": "",
          "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "葱花饼",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 124,
          "rating": 85,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "没啥味道",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "很一般啊",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "牛肉馅饼",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 114,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "难吃不推荐",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "招牌猪肉白菜锅贴/10个",
          "price": 17,
          "oldPrice": "",
          "description": "",
          "sellCount": 101,
          "rating": 78,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "不脆,不好吃",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "南瓜粥",
          "price": 9,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 91,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "红豆薏米美肤粥",
          "price": 12,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 86,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "八宝酱菜",
          "price": 4,
          "oldPrice": "",
          "description": "",
          "sellCount": 84,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "红枣山药糙米粥",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 81,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "糊塌子",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 80,
          "rating": 93,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "单人精彩套餐",
      "type": 2,
      "foods": [
        {
          "name": "红枣山药粥套餐",
          "price": 29,
          "oldPrice": 36,
          "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
          "sellCount": 17,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "冰爽饮品限时特惠",
      "type": 1,
      "foods": [
        {
          "name": "VC无限橙果汁",
          "price": 8,
          "oldPrice": 10,
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "精选热菜",
      "type": -1,
      "foods": [
        {
          "name": "娃娃菜炖豆腐",
          "price": 17,
          "oldPrice": "",
          "description": "",
          "sellCount": 43,
          "rating": 92,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "菜量还可以,味道还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "手撕包菜",
          "price": 16,
          "oldPrice": "",
          "description": "",
          "sellCount": 29,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "香酥黄金鱼/3条",
          "price": 11,
          "oldPrice": "",
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "爽口凉菜",
      "type": -1,
      "foods": [
        {
          "name": "八宝酱菜",
          "price": 4,
          "oldPrice": "",
          "description": "",
          "sellCount": 84,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "拍黄瓜",
          "price": 9,
          "oldPrice": "",
          "description": "",
          "sellCount": 28,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "精选套餐",
      "type": -1,
      "foods": [
        {
          "name": "红豆薏米粥套餐",
          "price": 37,
          "oldPrice": "",
          "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
          "sellCount": 3,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "皮蛋瘦肉粥套餐",
          "price": 31,
          "oldPrice": "",
          "description": "",
          "sellCount": 12,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "果拼果汁",
      "type": -1,
      "foods": [
        {
          "name": "蜜瓜圣女萝莉杯",
          "price": 6,
          "oldPrice": "",
          "description": "",
          "sellCount": 1,
          "rating": "",
          "info": "",
          "ratings": [],
          "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "加多宝",
          "price": 6,
          "oldPrice": "",
          "description": "",
          "sellCount": 7,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "VC无限橙果汁",
          "price": 8,
          "oldPrice": 10,
          "description": "",
          "sellCount": 15,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "还可以",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "小吃主食",
      "type": -1,
      "foods": [
        {
          "name": "扁豆焖面",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 188,
          "rating": 96,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "葱花饼",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 124,
          "rating": 85,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "没啥味道",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "很一般啊",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "牛肉馅饼",
          "price": 14,
          "oldPrice": "",
          "description": "",
          "sellCount": 114,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "难吃不推荐",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "招牌猪肉白菜锅贴/10个",
          "price": 17,
          "oldPrice": "",
          "description": "",
          "sellCount": 101,
          "rating": 78,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "不脆,不好吃",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "糊塌子",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 80,
          "rating": 93,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    },
    {
      "name": "特色粥品",
      "type": -1,
      "foods": [
        {
          "name": "皮蛋瘦肉粥",
          "price": 10,
          "oldPrice": "",
          "description": "咸粥",
          "sellCount": 229,
          "rating": 100,
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "很喜欢的粥",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 1,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "南瓜粥",
          "price": 9,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 91,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "红豆薏米美肤粥",
          "price": 12,
          "oldPrice": "",
          "description": "甜粥",
          "sellCount": 86,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "红枣山药糙米粥",
          "price": 10,
          "oldPrice": "",
          "description": "",
          "sellCount": 81,
          "rating": 91,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "鲜蔬菌菇粥",
          "price": 11,
          "oldPrice": "",
          "description": "咸粥",
          "sellCount": 56,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": ""
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
        },
        {
          "name": "田园蔬菜粥",
          "price": 10,
          "oldPrice": "",
          "description": "咸粥",
          "sellCount": 33,
          "rating": 100,
          "info": "",
          "ratings": [
            {
              "username": "3******c",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "2******3",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
            {
              "username": "3******b",
              "rateTime": 1558687964637,
              "rateType": 0,
              "text": "",
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            }
          ],
          "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
        }
      ]
    }
  ],
			classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
			listHeight: [],
			scrollY: 0,
			carShow: false,
			selectedFood: {},
			foodShow: false
		};
	},
	computed: {
		currentIndex() {
			for (let i = 0; i < this.listHeight.length; i++) {
				let height1 = this.listHeight[i];
				let height2 = this.listHeight[i + 1];
				if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
					return i;
				}
			}
			return 0;
		},
		selectFoods() {
			let foods = this.$store.state.shopCar;
			// this.goods.forEach((good) => {
			// 	good.foods.forEach((food) => {
			// 		if(food.count) {
			// 			foods.push(food)
			// 			this.carShow = true//显示购物车
			// 		}
			// 	})
			// })
			foods.forEach(item => {
				if (item.count) {
					this.carShow = true;
				}
			});
			return foods;
		}
	},
	methods: {
		hideCar() {
			this.carShow = false; //购物车数量为0隐藏购物车
		},
		closeFood() {
			this.foodShow = false;
		},
		selectFood(food) {
			this.selectedFood = food;
			this.foodShow = true;
		},
		selectMenu(index) {
			let foodList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook');
			let el = foodList[index];
			this.foodsScroll.scrollToElement(el, 400); //滑动到指定位置
		},
		initScroll() {
			this.menuScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			});
			this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
				probeType: 3,
				click: true
			});
			this.foodsScroll.on('scroll', pos => {
				this.scrollY = Math.abs(Math.round(pos.y));
			});
		},
		calculateHeight() {
			let foodList = this.$refs.foodsWrapper.getElementsByClassName('foods-list-hook');
			let height = 0;
			this.listHeight.push(height);
			for (let i = 0; i < foodList.length; i++) {
				let item = foodList[i];
				height += item.clientHeight;
				this.listHeight.push(height);
			}
			console.log(this.listHeight);
		}
	},
	// created() {
	// 
	// 	axios({
	// 		method: 'get',
	// 		url: 'https://94.191.55.232:2001/api/goods'
	// 	}).then(res => {
	// 		if (res.data.errno === ERR_OK) {
	// 			this.goods = res.data.data
	// 			this.$nextTick( () => {//操作dom搭配使用
	// 				this.initScroll()
	// 				this.calculateHeight()
	// 		})
	// 		}
	// 	})
	// },
	created() {
		this.$nextTick(() => {
			//操作dom搭配使用
			this.initScroll();
			this.calculateHeight();
		});
	},
	components: {
		shopcar,
		carcontrol,
		food
	}
};
</script>

<style lang="scss" scoped>
.food-enter,
.food-leave-to {
	opacity: 0;
	transform: translateX(300px);
}

.food-enter-active,
.food-leave-active {
	transition: all 0.4s ease;
}
.goods {
	display: flex;
	position: absolute;
	width: 100%;
	top: 174px;
	bottom: 0px;
	overflow: hidden;
	.menu-wrapper {
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
		.menu-item {
			padding: 0 12px;
			display: table;
			height: 54px;
			width: 56px;
			line-height: 14px;
			&.current {
				position: relative;
				z-index: 10;
				margin-top: -1px;
				background: #fff;
				font-weight: 700;
				.text {
					border: none;
				}
			}
			.icon {
				display: inline-block;
				vertical-align: top;
				width: 12px;
				height: 12px;
				margin-right: 2px;
				background-size: 12px 12px;
				background-repeat: no-repeat;
				&.decrease {
					background-image: url('./img/decrease_3@2x.png');
				}
				&.discount {
					background-image: url('./img/discount_3@2x.png');
				}
				&.guarantee {
					background-image: url('./img/guarantee_3@2x.png');
				}
				&.invoice {
					background-image: url('./img/invoice_3@2x.png');
				}
				&.special {
					background-image: url('./img/special_3@2x.png');
				}
			}
			.text {
				display: table-cell;
				font-size: 12px;
				width: 56px;
				vertical-align: middle;
				border-bottom: 1px solid rgba(7, 17, 27, 0.1);
			}
		}
	}
	.foods-wrapper {
		flex: 1;
		z-index: 22;
		.title {
			padding-left: 14px;
			height: 26px;
			line-height: 26px;
			border-left: 2px solid #d9dde1;
			font-size: 12px;
			color: rgb(147, 153, 159);
			background: #f3f5f7;
		}
		.food-item {
			display: flex;
			margin: 18px;
			padding-bottom: 18px;
			border-bottom: 1px solid rgba(7, 17, 27, 0.1);
			&:last-child {
				border-bottom: none;
				margin-bottom: 0;
			}
			.icon {
				flex: 0 0 57px;
				margin-right: 10px;
			}
			.content {
				position: relative;
				flex: 1;
				.name {
					margin: 2px 0;
					height: 14px;
					line-height: 14px;
					font-size: 14px;
					color: rgb(7, 17, 27);
				}
				.desc {
					margin-bottom: 8px;
					line-height: 10px;
					font-size: 10px;
					color: rgb(147, 153, 159);
				}
				.extra {
					line-height: 10px;
					font-size: 10px;
					color: rgb(147, 153, 159);
					.count {
						margin-right: 12px;
					}
				}
				.price {
					font-weight: 700;
					line-height: 24px;
					.now {
						margin-right: 8px;
						font-size: 14px;
						color: rgb(240, 20, 20);
					}
					.old {
						text-decoration: line-through;
						font-size: 10px;
						color: rgb(147, 153, 159);
					}
				}
				.carcontrol-wrapper {
					position: absolute;
					right: 0;
					bottom: 0;
					margin-bottom: -10px;
				}
			}
		}
	}
}
</style>
