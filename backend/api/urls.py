from django.urls import path
from . import views


urlpatterns = [


    path('test/', views.GETViews.as_view()),
    path('test/create', views.PostViews.as_view()),
    path('test/<int:pk>', views.DetailViews.as_view()),
    path('test/upd/<int:pk>', views.UpdateViews.as_view()),
    path('test/del/<int:pk>', views.DeleteViews.as_view()),
    path('test/ser', views.AnnouncementSearching.as_view()),
    path('test/userannouncements', views.GETViewsOfUser.as_view()),
    path('test/themeSer', views.SearchingByTheme.as_view()),

]
