var dialog_num = 0;
function open_minecraft_dialog(conf){
	var dialog = document.createElement("div");
	dialog.classList.add("minecraft");
	dialog.classList.add("dialog");
	dialog.id = "minecraft_dialog___unique_data_6794316513467873548946757875345182739975__number_" + dialog_num;
	dialog_num++;
	var svg = document.createElement("svg");
	svg.innerHTML = "<svg viewbox=\"0 0 300 250\" xmlns=\"http://www.w3.org/2000/svg\">\n	<!-- 整体 -->\n	<g>\n		<!-- 全部边框 -->\n		<g>\n			<!-- 四边 -->\n			<g>\n				<!-- 上 -->\n				<rect x=\"3\" y=\"0\" width=\"294\" height=\"1\" />\n				<!-- 下 -->\n				<rect x=\"3\" y=\"249\" width=\"294\" height=\"1\" />\n				<!-- 左 -->\n				<rect x=\"0\" y=\"3\" width=\"1\" height=\"244\" />\n				<!-- 右 -->\n				<rect x=\"299\" y=\"3\" width=\"1\" height=\"244\" />\n			</g>\n			<!-- 四角 -->\n			<g>\n				<!-- 左上 -->\n				<g>\n					<rect x=\"1\" y=\"2\" width=\"1\" height=\"1\" />\n					<rect x=\"2\" y=\"1\" width=\"1\" height=\"1\" />\n					<rect x=\"3\" y=\"0\" width=\"1\" height=\"1\" />\n				</g>\n				<!-- 左下 -->\n				<g>\n					<rect x=\"1\" y=\"247\" width=\"1\" height=\"1\" />\n					<rect x=\"2\" y=\"248\" width=\"1\" height=\"1\" />\n					<rect x=\"3\" y=\"249\" width=\"1\" height=\"1\" />\n				</g>\n				<!-- 右下 -->\n				<g>\n					<rect x=\"298\" y=\"247\" width=\"1\" height=\"1\" />\n					<rect x=\"297\" y=\"248\" width=\"1\" height=\"1\" />\n					<rect x=\"296\" y=\"249\" width=\"1\" height=\"1\" />\n				</g>\n				<!-- 右上 -->\n				<g>\n					<rect x=\"297\" y=\"1\" width=\"1\" height=\"1\" />\n					<rect x=\"298\" y=\"2\" width=\"1\" height=\"1\" />\n					<rect x=\"299\" y=\"3\" width=\"1\" height=\"1\" />\n				</g>\n			</g>\n		</g>\n		<!-- 背景 -->\n		<g>\n			<rect x=\"3\" y=\"1\" width=\"294\" height=\"248\" fill=\"#DDDDDD\" />\n			<rect x=\"2\" y=\"2\" width=\"1\" height=\"246\" fill=\"#DDDDDD\" />\n			<rect x=\"1\" y=\"3\" width=\"1\" height=\"244\" fill=\"#DDDDDD\" />\n			<rect x=\"297\" y=\"2\" width=\"1\" height=\"246\" fill=\"#DDDDDD\" />\n			<rect x=\"298\" y=\"3\" width=\"1\" height=\"244\" fill=\"#DDDDDD\" />\n		</g>\n		<!-- 内边 -->\n		<g>\n			<!-- 左 -->\n			<rect x=\"1\" y=\"3\" width=\"2\" height=\"244\" fill=\"#FFFFFF\" />\n			<!-- 上 -->\n			<rect x=\"2\" y=\"2\" width=\"2\" height=\"2\" fill=\"#FFFFFF\" />\n			<!-- 左上 -->\n			<rect x=\"3\" y=\"1\" width=\"294\" height=\"2\" fill=\"#FFFFFF\" />\n			<!-- 右上 -->\n			<rect x=\"297\" y=\"2\" width=\"1\" height=\"1\" fill=\"#C6C6C6\" />\n			<!-- 右 -->\n			<rect x=\"297\" y=\"3\" width=\"2\" height=\"244\" fill=\"#555555\" />\n			<!-- 右下 -->\n			<rect x=\"296\" y=\"246\" width=\"2\" height=\"2\" fill=\"#555555\" />\n			<!-- 下 -->\n			<rect x=\"3\" y=\"247\" width=\"294\" height=\"2\" fill=\"#555555\" />\n			<!-- 左下 -->\n			<rect x=\"2\" y=\"247\" width=\"1\" height=\"1\" fill=\"#555555\" />\n		</g>\n		<!-- 内容框 -->\n		<g>\n			<!-- 内容 -->\n			<rect x=\"6\" y=\"30\" width=\"288\" height=\"120\" fill=\"#090909\" />\n			<!-- 边框 -->\n			<rect x=\"6\" y=\"30\" width=\"288\" height=\"1\" fill=\"#393939\" />\n			<rect x=\"6\" y=\"30\" width=\"1\" height=\"120\" fill=\"#393939\" />\n			<rect x=\"6\" y=\"149\" width=\"288\" height=\"1\" fill=\"#FFFFFF\" />\n			<rect x=\"293\" y=\"30\" width=\"1\" height=\"120\" fill=\"#FFFFFF\" />\n			<rect x=\"6\" y=\"149\" width=\"1\" height=\"1\" fill=\"#6B6B6B\" />\n			<rect x=\"293\" y=\"30\" width=\"1\" height=\"1\" fill=\"#6B6B6B\" />\n		</g>\n	</g>\n</svg>";
	dialog.appendChild(svg);
	var title = document.createElement("div");
	title.classList.add("minecraft");
	title.classList.add("dialog_title");
	title.innerText = ((conf || {}).title || "");
	dialog.appendChild(title);
	var content = document.createElement("div");
	content.classList.add("minecraft");
	content.classList.add("dialog_content");
	content[
		function(){
			if(conf.isHTML){
				return "innerHTML";
			}else{
				return "innerText";
			}
		}()
	] = ((conf || {}).content || "");
	dialog.appendChild(content);
	dialog.close = function(){
		this.remove();
	}
	if(conf.close_btn){
		var close_btn = document.createElement("div");
		close_btn.classList.add("close");
		close_btn.onclick = function(){
			// close("#" + dialog.id);
			this.parentNode.close();
		}
		dialog.appendChild(close_btn);
	}
	var ok_btn = document.createElement("button");
	ok_btn.classList.add("minecraft");
	ok_btn.innerText = (conf.ok_btn_text || "确定");
	ok_btn.onclick = function(){
		(conf.on_ok || function(dialog){
			dialog.close();
		})(this.parentNode);
	}
	dialog.appendChild(ok_btn);
	var cancel_btn = document.createElement("button");
	cancel_btn.classList.add("minecraft");
	cancel_btn.innerText = (conf.cancel_btn_text || "取消");
	cancel_btn.onclick = function(){
		(conf.on_cancel || function(dialog){
			dialog.close();
		})(this.parentNode);
	}
	dialog.appendChild(cancel_btn);
	document.documentElement.appendChild(dialog);
}