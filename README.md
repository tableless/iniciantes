Iniciantes
==========
Em uma conversa no Twitter, algumas pessoas identificaram que faltava conteúdo para iniciantes. Resolvemos então criar um conteúdo básico, mínimo, para que alguém que esteja iniciando na área tenha alguma bagagem para aprender informações importantes de forma que ela saiba por onde começar.

----------

Guia básico para iniciantes
----------
Se você quiser ajudar a melhorar este guia, escrevendo, corrigindo ou aprimorando a experiência de utilização, por favor, faça um FORK do projeto e mãos à obra.

Como funciona
----------
Utilizamos [Jekyll](http://jekyllrb.com) uma Gem do [Ruby](http://www.ruby-lang.org/) para gerar páginas estáticas.

1. Instale o [Ruby](http://www.ruby-lang.org/pt/downloads/)

2. Instale a Gem do [Bundler](http://bundler.io/):
    ```
    gem install bundler
    ```
3. Clone o projeto:
    ```
    git@github.com:tableless/iniciantes.git
    ```
4. Vá a pasta do projeto:
    ```
    cd iniciantes
    ```
5. Instale as dependências através do [Bundler](http://bundler.io/):
    ```
    bundle install
    ```
5. Inicie o [Jekyll](http://jekyllrb.com/):
    ```
    jekyll serve -w
    ```
5. Acesse [http://localhost:4000/iniciantes/](http://localhost:4000/iniciantes/)

Escrevendo código com syntax highlight
----------
Para escrever código, usamos o Google Prettify, que já é conhecido de todos. Uma estrutura para código básica segue abaixo:

	<pre class="lang-html prettyprint linenums">
        &lt;!DOCTYPE html&gt;
	    &lt;html lang=&quot;pt-br&quot;&gt;
	      &lt;head&gt;
	        &lt;title&gt;&lt;/title&gt;
	        &lt;meta charset=&quot;utf-8&quot;&gt;
	      &lt;/head&gt;
	      &lt;body&gt;

	      &lt;/body&gt;
	    &lt;/html&gt;
	</pre>

A classe `lang-x` define a linguagem do código, onde `x` é a linguagem (javascript, css, php, asp, ruby e assim por diante). Lembre-se de escapar sinais como &lt; &gt; colocando em entidades HTML (&amp;lt; &amp;gt;).

Estrutura básica de diretórios
----------
Dentro de **manual** você encontra todos os textos do guia. Lá está separado em 4 pastas básicas: **obasico** onde agrupa textos sobre o conceito da área. A pasta **HTML** contém textos sobre HTML e seu funcionamento. A pasta **CSS** tem textos sobre CSS. E por último mas não menos importante, a pasta **JS** guarda textos sobre JavaScript e afins.

A pasta **assets** guarda o CSS, o JS e as imagens usadas no projeto.


```
| iniciantes/
|
|-- _includes/
|
|-- _layouts/
|
|-- assets/
|   |-- imgs
|   |-- javascripts
|   |-- stylesheet
|
|-- manual/
|   |-- css
|   |-- html
|   |-- js
|   |-- obasico
|
|-- slide/
|   |-- css
|   	|-- fonts
|   	|-- galery-sass
|   	|-- galery
|   |-- img
|   |-- js
|   |-- layout
```


Da comunidade para a comunidade
----------
Esta iniciativa é da comunidade para a comunidade. Prezamos pelo bom conteúdo e sabemos que encontrar conteúdo básico é muito difícil, por isso tente divulgar o máximo que puder para aqueles que estão começando. Dessa forma temos a certeza de que a qualidade da internet brasileira vai crescer ainda mais.
