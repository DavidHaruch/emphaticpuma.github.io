(function(doc){
    var list = {
        // adds a post to the list with the data you give it
        // TODO probs make this a bit better
        // @param {object} obj - object's properties are in json_posts.json
        addPost: function (obj,li_id,callback) {
            var post_list = document.querySelector('#index_posts');
            // create the li elem
            var e = document.createElement('li');
            e.className = 'post__item';
            if (li_id)
                e.id = li_id;

            // for the title stuff h2>a
            var title = document.createElement('h2');
            var title_a = document.createElement('a');
            title.className = 'item__title';
            title_a.setAttribute('href', obj.url);
            title_a.textContent = obj.title;
            title.appendChild(title_a);
            e.appendChild(title);

            // for the meta_date
            var s_d = document.createElement('span');
            s_d.className = 'item__date';
            s_d.textContent = obj.date;
            // e.appendChild(s_d);
            
            // for the meta_author (or not)
            var s_a = document.createElement('span');
            s_a.className = 'item__author';
            s_a.innerHTML = obj.author;
            // e.appendChild(s_a);

            // for the meta container
            var meta = document.createElement('div');
            meta.className = 'item__meta';

            // tack on the sub-meta elements
            meta.appendChild(s_d);
            meta.appendChild(s_a);
            e.appendChild(meta);

            // for the content container
            var d_content = document.createElement('div');
            d_content.className = 'item__content';
            d_content.innerHTML = obj.content;
            e.appendChild(d_content);

            // e.innerHTML += obj.content;
            console.log(obj.content);
            post_list.appendChild(e);
            if (callback)
                callback();
        },
        // gets the ammnt of posts on the page
        // @returns {number}
        getLength: function () {
            var post_list = document.querySelectorAll('#index_posts > li');
            var post_list_length = post_list.length;
            return post_list_length;
        },
        // gets url params
        // @param {string} url - the current url, normally window.location.href
        // @param {string} id  - the url param's name that you want the value for
        // @returns {string|number}
        getUrlParam: function (id,url) {
            if (!url) {
                url = window.location.href;
            }
            url_arr = url.split("?");
            for (var i=1;i<url_arr.length;i++) {
                var param_arr = url_arr[i].split("=");
                if (param_arr[0] == id) {
                    return param_arr[1];
                }
            }
        },
        // removes the load more button
        removeButton: function () {
            console.log("all posts loaded, removing load more button");
            document.getElementById('index_posts_append').parentNode.removeChild(document.getElementById('index_posts_append'));
        },
        // scrolls to post number
        // @param {number} num - post number starting from index 0
        scrollToPost : function (num) {
            var idSelector = 'list_num_' + num;
            var elem = document.getElementById(idSelector);
            elem.scrollIntoView();
        }
    };
    var load_button = document.getElementById('posts_more');
    var spinner = document.getElementById('index_posts_spinner');
    var liquid_post_loop = 2;
    if (list.getUrlParam("posts")) {
        qwest.get('/json_posts.json').then(function(xhr,res){
            for (var i=list.getLength();i<list.getUrlParam("posts");i++) {
                list.addPost(res.posts[i],'list_num_'+i);
            }
            if (list.getUrlParam("posts") == res.posts.length)
                list.removeButton();
            list.scrollToPost(list.getUrlParam("posts")-1);
            // tell mathjax to parse any added math in these posts
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        })
        .catch(function(e){
            console.log(e);
        });
    }

    if (load_button) {

    load_button.addEventListener('click', function(){

        spinner.style.display = 'block';

        qwest.get('/json_posts.json')
        .then(function(xhr,res){

            if (list.getLength() !== res.posts.length) {
                list.addPost(res.posts[list.getLength()],'list_num_'+list.getLength());
                console.log("loading more stuff");
                var state = {
                    posts_loaded: list.getLength()
                };
                history.replaceState(state,document.title,"?posts="+list.getLength());
                // tell mathjax to parse any added math in this post
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                if (list.getLength() == res.posts.length) {
                    list.removeButton();
                }
                spinner.style.display = 'none';
            }
        })
        .catch(function(e,xhr,res){
            console.log(e);
        });
    });
    }
})(document);
