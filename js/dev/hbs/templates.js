this["handlebars"] = this["handlebars"] || {};

this["handlebars"]["html_hbs/handlebars/template.html"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\"principal\"><p>Este es texto dentro de un div llamado principal!</p><p>Aqui podemos meter un tag handlebars "
    + escapeExpression(((helper = (helper = helpers.mivariable || (depth0 != null ? depth0.mivariable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mivariable","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"useData":true});