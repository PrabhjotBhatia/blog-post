$(document).ready(function () {
    $.ajax({
      url: "http://faker.hook.io/?property=name.firstName",
      method: 'GET',
      dataType: 'JSON'
    }).done( function(firstName) {
      setName(firstName)
    })
  
    $.ajax({
      url: "http://faker.hook.io/?property=internet.avatar",
      method: 'GET',
      dataType: 'JSON'
    }).done(function(pic) {
      setPic(pic)
    })
  
    $.ajax({
      url: "http://faker.hook.io/?property=date.recent",
      method: 'GET',
      dataType: 'JSON'
    }).done(function(date) {
      setDate(date)
    })

    $.ajax({
        url: "http://faker.hook.io/?property=lorem.paragraphs",
        method: 'GET',
        dataType: 'JSON'
      }).done(function(post) {
        setPost(post)
      })

      $.ajax({
        url: "http://faker.hook.io/?property=lorem.sentence",
        method: 'GET',
        dataType: 'JSON'
      }).done(function(title) {
        setTitle(title)
      })
  
    function setName(name) {
      $('#name').html(name)
    }
  
    function setPic(img) {
      $('#profile-pic').attr("src", img)
    }
  
    function setDate(date) {
      var day = moment(date).date()
      var month = moment(date).format('MMMM')
      var year = moment(date).year()
      $('#date').html(month + " " + day + "," + " " + year)
    }

    function setTitle(title) {
        $('#title').html(title)
    }

    function setPost(post) {
        $('#post-body').html(post)
    }
  });