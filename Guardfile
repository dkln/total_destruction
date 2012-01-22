#!/usr/bin/env ruby
#guard 'process', :name => 'Combine Javascript from CoffeeScript', :command => 'coffee -cj public/js/td.js src/' do
#  watch %r{src/.+\.coffee}
#end
guard 'coffeescript', :input => 'src', :output => 'public/js'

guard 'compass' do
  watch(%r|^src/(.*)\.s[ac]ss|)
end
