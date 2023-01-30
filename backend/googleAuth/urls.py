
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', TemplateView.as_view(template_name='blog/index.html')),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('data/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
