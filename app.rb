require 'sinatra'

get '/' do
    erb :index
end

get '/sponsors' do
    erb :sponsors
end

get '/sponsorslist' do
	erb :sponsorslist
end