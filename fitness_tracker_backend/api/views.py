from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework.views import APIView

class FitnessCheckAPI(APIView):
    def get(self, request):
        person = {'name':'Dennis', 'age':28}
        return Response(person, status=200)
    
    def post(self, request):
        return Response(status=201)