(function(doc){
    var list = {
        // adds a post to the list with the data you give it
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

            // for the date
            var s_d = document.createElement('span');
            s_d.className = 'item__date';
            s_d.textContent = obj.date;
            e.appendChild(s_d);

            // for the author (or not)
            var s_a = document.createElement('span');
            s_a.className = 'item__author';
            s_a.innerHTML = obj.author;
            e.appendChild(s_a);

            e.innerHTML += obj.content;
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

    if (list.getUrlParam("posts")) {
        qwest.get('/json_posts.json').then(function(xhr,res){
            for (var i=list.getLength();i<list.getUrlParam("posts");i++) {
                list.addPost(res.posts[i],'list_num_'+i);
            }
            if (list.getUrlParam("posts") == res.posts.length)
                list.removeButton();

            list.scrollToPost(list.getUrlParam("posts")-1);
        })
        .catch(function(e){
            console.log(e);
        });


    }

    if (load_button) {

    load_button.addEventListener('click', function(){

        qwest.get('/json_posts.json')
        .then(function(xhr,res){

            if (list.getLength() !== res.posts.length) {
                list.addPost(res.posts[list.getLength()],'list_num_'+list.getLength());
                console.log("loading more stuff");
                var state = {
                    posts_loaded: list.getLength()
                };
                history.replaceState(state,document.title,"?posts="+list.getLength())
                if (list.getLength() == res.posts.length) {
                    list.removeButton();
                }
            }
        })
        .catch(function(e,xhr,res){
            console.log(e);
        });
    });
    }
})(document);
