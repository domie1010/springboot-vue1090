<template>
<div class="center-preview" :style='{"padding":"20px 12% 40px","margin":"0 auto","color":"#999","flexWrap":"wrap","background":"#edeff1","display":"block","width":"100%","fontSize":"14px","position":"relative","justifyContent":"space-between"}'>
	<div class="title" :style='{"padding":"12px 0 0","margin":"0px auto","color":"#333","textAlign":"center","background":"none","width":"100%","fontSize":"24px","fontWeight":"600","height":"60px"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"80px 60px 80px 200px","margin":"20px 0 0 0","borderColor":"#28890b20","alignItems":"center","display":"flex","borderRadius":"0px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"calc(100% - 0px)","position":"relative","borderStyle":"solid","height":"auto","order":"2"}'>
		<div :style='{"padding":"8px 30px","borderColor":"#eee","margin":"0 20px 0 0","color":"#333","letterSpacing":"0px","borderRadius":"0px","top":"20px","left":"170px","borderWidth":"0px","background":"none","width":"auto","lineHeight":"1.5","fontSize":"18px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"auto"}'>个人信息</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#1abc9e20","left":"20px","borderWidth":"0 0 0px 0","width":"auto","fontSize":0,"position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0 0 1px 0","display":"block","width":"150px","borderStyle":"solid","height":"150px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>账号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.zhanghao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>姓名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>性别</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>手机</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.shouji}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>积分</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.jf}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>余额</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.money}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"width":"100%","margin":"0 10px 0 0","fontSize":"inherit","color":"inherit"}'>商家账号</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.shangjiazhanghao}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>店铺名</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.dianpuming}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>店铺地址</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.dianpudizhi}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>负责人</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.fuzeren}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0 5% 0 0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>联系电话</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.lianxidianhua}}</div>
		</div>
		<div :style='{"padding":"0 0px","borderColor":"#1abc9e20","margin":"0","borderWidth":"0 0 0px 0","display":"block","width":"auto","lineHeight":"1.5","borderStyle":"solid","height":"auto"}' v-if="userTableName=='shangjia'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"inherit","margin":"0 10px 0 0","fontSize":"inherit"}'>邮箱</div>
			<div :style='{"fontSize":"inherit","color":"inherit","textAlign":"left","flex":1}'>{{sessionForm.youxiang}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","margin":"20px 0 0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="100px">
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="账号" prop="zhanghao">
            <el-input v-model="sessionForm.zhanghao" placeholder="账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="手机" prop="shouji">
            <el-input v-model="sessionForm.shouji" placeholder="手机" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="yonghutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="积分">
            <el-input v-model="sessionForm.jf" placeholder="积分" readonly></el-input>
          </el-form-item>
          <el-form-item class="balance" :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='yonghu'" label="余额">
            <div :style='{"flexWrap":"wrap","display":"flex"}'>
				<el-input v-model="sessionForm.money" placeholder="余额" readonly></el-input>
				<div @click="dialogFormVisibleMoney = true" :style='{"cursor":"pointer","padding":"0 15px","margin":"0 20px 0 10px","borderColor":"#eee","color":"#fff","display":"inline-block","outline":"none","borderRadius":"4px","background":"#3795c4","borderWidth":"0px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid","height":"40px"}'>点我充值</div>
			</div>
		  </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="商家账号" prop="shangjiazhanghao">
            <el-input v-model="sessionForm.shangjiazhanghao" placeholder="商家账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="店铺名" prop="dianpuming">
            <el-input v-model="sessionForm.dianpuming" placeholder="店铺名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="店铺地址" prop="dianpudizhi">
            <el-input v-model="sessionForm.dianpudizhi" placeholder="店铺地址" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="负责人" prop="fuzeren">
            <el-input v-model="sessionForm.fuzeren" placeholder="负责人" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="联系电话" prop="lianxidianhua">
            <el-input v-model="sessionForm.lianxidianhua" placeholder="联系电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="邮箱" prop="youxiang">
            <el-input v-model="sessionForm.youxiang" placeholder="邮箱" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="封面" prop="touxiang">
			<file-upload
			tip="点击上传封面"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="shangjiatouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="营业执照" prop="yingyezhizhao">
			<file-upload
			tip="点击上传营业执照"
			action="file/upload"
			:limit="1"
			:type="3"
			:multiple="true"
			:fileUrls="sessionForm.yingyezhizhao?sessionForm.yingyezhizhao:''"
			@change="shangjiayingyezhizhaoHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="积分">
            <el-input v-model="sessionForm.jf" placeholder="积分" readonly></el-input>
          </el-form-item>
          <el-form-item class="balance" :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' v-if="userTableName=='shangjia'" label="余额">
            <div :style='{"flexWrap":"wrap","display":"flex"}'>
				<el-input v-model="sessionForm.money" placeholder="余额" readonly></el-input>
				<div @click="dialogFormVisibleMoney = true" :style='{"cursor":"pointer","padding":"0 15px","margin":"0 20px 0 10px","borderColor":"#eee","color":"#fff","display":"inline-block","outline":"none","borderRadius":"4px","background":"#3795c4","borderWidth":"0px","width":"auto","lineHeight":"40px","fontSize":"14px","borderStyle":"solid","height":"40px"}'>点我充值</div>
			</div>
		  </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"1px solid #3795c4","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#3795c4","borderRadius":"30px","background":"#fff","width":"110px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="100px">
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0px","margin":"0 0 20px","background":"none","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"30px","background":"#3795c4","width":"120px","lineHeight":"50px","fontSize":"14px","height":"50px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的发布"></el-tab-pane>
      <el-tab-pane label="我的订单"></el-tab-pane>
      <el-tab-pane label="我的地址" name="MyAddress">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

	<el-dialog title="用户充值" :visible.sync="dialogFormVisibleMoney" width="726px" center>
	  <el-form :model="chongzhiForm">
		<el-form-item label="充值金额" label-width="120px">
		  <el-input type="number" v-model="chongzhiForm.money" autocomplete="off" placeholder="充值金额"></el-input>
		</el-form-item>
		<el-form-item label-width="120px">
		  <el-radio-group v-model="chongzhiForm.radio">
			<el-radio style="margin-bottom: 30px" label="微信支付">
			  <el-image
				style="width: 60px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/weixin.png')"
				fit="fill"></el-image>
				<span style="display: inline-block;margin-left: 10px">微信支付</span>
			</el-radio>
			<el-radio label="支付宝支付">
			  <el-image
				style="width: 60px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/zhifubao.png')"
				fit="fill"></el-image>
				<span style="display: inline-block;margin-left: 10px">支付宝支付</span>
			</el-radio>
			<el-radio label="中国建设银行支付">
			  <el-image
				style="width: 120px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/jianshe.png')"
				fit="fill"></el-image>
			</el-radio>
			<el-radio label="中国农业银行支付">
			  <el-image
				style="width: 126px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/nongye.png')"
				fit="fill"></el-image>
			</el-radio>
			<el-radio label="中国银行支付">
			  <el-image
				style="width: 140px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/zhongguo.png')"
				fit="fill"></el-image>
			</el-radio>
			<el-radio label="交通银行支付">
			  <el-image
				style="width: 120px; height: 60px;vertical-align: middle;"
				:src="require('@/assets/jiaotong.png')"
				fit="fill"></el-image>
			</el-radio>
		  </el-radio-group>
		</el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisibleMoney = false">取 消</el-button>
		<el-button type="primary" @click="chongzhi">确认充值</el-button>
	  </div>
	</el-dialog>
</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
        chongzhiForm: {
          money: '',
          radio: ''
        },
		menuList: [],
        disabled: false,
        dialogFormVisibleMoney: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'zhanghao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'shouji', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'jf', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'money', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'shangjiazhanghao', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'dianpuming', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'dianpudizhi', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'fuzeren', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'lianxidianhua', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'youxiang', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'yingyezhizhao', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'jf', null);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.sessionForm, 'money', null);
		}

		if ('yonghu' == this.userTableName&&this.rules['zhanghao']){
			this.rules['zhanghao'].push({ required: true, message: '请输入账号', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['zhanghao']) {
			this.$set(this.rules, 'zhanghao', [{ required: true, message: '请输入账号', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['xingming']){
			this.rules['xingming'].push({ required: true, message: '请输入姓名', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['xingming']) {
			this.$set(this.rules, 'xingming', [{ required: true, message: '请输入姓名', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'shouji', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'jf', [{ required: false, validator: this.$validate.isNumber, trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'money', [{ required: false, validator: this.$validate.isNumber, trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName&&this.rules['shangjiazhanghao']){
			this.rules['shangjiazhanghao'].push({ required: true, message: '请输入商家账号', trigger: 'blur' })
		}else if('shangjia' == this.userTableName&&!this.rules['shangjiazhanghao']) {
			this.$set(this.rules, 'shangjiazhanghao', [{ required: true, message: '请输入商家账号', trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('shangjia' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName&&this.rules['dianpuming']){
			this.rules['dianpuming'].push({ required: true, message: '请输入店铺名', trigger: 'blur' })
		}else if('shangjia' == this.userTableName&&!this.rules['dianpuming']) {
			this.$set(this.rules, 'dianpuming', [{ required: true, message: '请输入店铺名', trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.rules, 'lianxidianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.rules, 'youxiang', [{ required: false, validator: this.$validate.isEmail, trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.rules, 'jf', [{ required: false, validator: this.$validate.isNumber, trigger: 'blur' }]);
		}
		if ('shangjia' == this.userTableName) {
			this.$set(this.rules, 'money', [{ required: false, validator: this.$validate.isNumber, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`shangjia` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`shangjia` == this.userTableName && this.sessionForm.yingyezhizhao!=null){
			this.sessionForm.yingyezhizhao = this.sessionForm.yingyezhizhao.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      yonghutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      shangjiatouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      shangjiayingyezhizhaoHandleAvatarSuccess(fileUrls) {
        this.sessionForm.yingyezhizhao = fileUrls;
      },
      chongzhi() {
        if (this.chongzhiForm.money == '') {
          this.$message({
            message: '请输入充值金额',
            type: 'error',
            duration: 1500
          });
          return;
        }
        if (this.chongzhiForm.money <= 0) {
          this.$message({
            message: '请输入正确的充值金额',
            type: 'error',
            duration: 1500
          });
          return;
        }
        if (this.chongzhiForm.radio == '') {
          this.$message({
            message: '请选择充值方式',
            type: 'error',
            duration: 1500
          });
          return;
        }
		if(!this.sessionForm.money) {
			this.sessionForm.money = parseFloat(this.chongzhiForm.money)
		}else{
			this.sessionForm.money = parseFloat(this.sessionForm.money) + parseFloat(this.chongzhiForm.money);
		}
        
        this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
          if (res.data.code == 0) {
			  this.setSession()
            this.$message({
              message: '充值成功',
              type: 'success',
              duration: 1500,
              onClose: () => {
                this.dialogFormVisibleMoney = false;
              }
            });
          }
        });
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的发布':
            tab.$router.push('/index/myForumList');
            break;
          case '我的订单':
            tab.$router.push('/index/shop-order/order');
            break;
          case '我的地址':
            tab.$router.push('/index/shop-address/list');
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.passwordForm.newpassword == this.passwordForm.password) {
						this.$message.error("新密码与原密码相同！");
						return;
					}
					if (this.userTableName == 'yonghu') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '订单管理':
				return false
				break;
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 0 60px;
	margin: 20px 0 30px;
	background: #fff;
	width: 100%;
	border-color: #28890b20;
	border-width: 0 0 0px;
	position: relative;
	border-style: solid;
	text-align: center;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 10px;
  	color: #666;
  	font-weight: 500;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: none;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #fff;
  	background: #3795c4;
  	font-weight: 600;
  	font-size: 16px;
  	line-height: 60px;
  	position: relative;
  	text-align: center;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	margin: 0 10px 0 0;
  	color: #fff;
  	font-weight: 600;
  	display: block;
  	font-size: 16px;
  	line-height: 60px;
  	float: left;
  	background: #3795c4;
  	width: auto;
  	position: relative;
  	text-align: center;
  	min-width: 100px;
  	height: 60px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 0px;
  	margin: 0px 0 0;
  	background: none;
  	width: calc(100% - 20px);
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 100px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 100px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	padding: 0 12px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	padding: 0 10px 0 30px;
  	color: #666;
  	font-size: 14px;
  	border-color: #eee;
  	border-radius: 4px;
  	box-shadow: 0 0 0px rgba(64, 158, 255, .5);
  	outline: none;
  	background: #fff;
  	width: auto;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	cursor: pointer;
  	color: #666;
  	font-weight: 600;
  	font-size: 24px;
  	border-color: #eee;
  	line-height: 80px;
  	border-radius: 4px;
  	background: #fff;
  	width: 120px;
  	border-width: 0px;
  	border-style: solid;
  	text-align: center;
  	height: 80px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border-radius: 4px;
  	padding: 0 12px;
  	color: #666;
  	background: #fff;
  	display: inline-block;
  	width: auto;
  	font-size: 14px;
  	border-color: #eee;
  	border-width: 0px;
  	border-style: solid;
  	min-width: 300px;
  	height: 40px;
  }
</style>
